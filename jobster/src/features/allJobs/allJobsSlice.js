import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk, showStatsThunk } from './allJobsThunk';
import customFetch from "../../utils/axios";


const initialFiltersState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
    isLoading: true,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    status: {},
    monthlyApplications: [],
    ...initialFiltersState
};

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs',
    async (_, thunkAPI) => {
      const { page, search, searchStatus, searchType, sort } =
        thunkAPI.getState().allJobs;
  
      let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
      if (search) {
        url = url + `&search=${search}`;
      }
      try {
        const resp = await customFetch.get(url);
        return resp.data;
      } catch(error) {
          thunkAPI.rejectWithValue(error.response.data.msg)
      }
    }
  )

export const showStats = createAsyncThunk('allJobs/showStats', showStatsThunk);



const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers:{
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        handleChange: (state, {payload: { name, value}}) => {
            state.page = 1;
            state[name] = value;
        },
        clearFilters: (state) => {
            return {...state, ...initialFiltersState };
        },
        changePage: (state, { payload }) => {
            state.page = payload;
        },
        clearAllJobsState: (state) => initialState
    },
    extraReducers:{
        [getAllJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
            state.numOfPages = payload.numOfPages;
            state.totalJobs = payload.totalJobs;
        },
        [getAllJobs.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload)
        },[showStats.pending] : (state) => {
            state.isLoading = true
        },[showStats.fulfilled]: (state, { payload }) => {
            state.stats = payload.defaultStats;
            state.monthlyApplications = payload.monthlyApplications;
        },[showStats.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        }
    }
});

export const { showLoading, hideLoading, handleChange, clearFilters, changePage,clearAllJobsState } = allJobsSlice.actions;
export default allJobsSlice.reducer;