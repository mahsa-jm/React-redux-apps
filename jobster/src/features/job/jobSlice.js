import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { UserLogout } from "../user/userSlice";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import { createJobThunk, editJobThunk, deleteJobThunk } from "./jobThunk";


const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    isEditing: false,
    editJobId: '',
};


export const createJob = createAsyncThunk('job/createJob', createJobThunk);

export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk);

export const editJob = createAsyncThunk('job/editJob', editJobThunk)

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state,{ payload: {name, value} }) => {
            state[name] = value;
        },
        clearValues: () => {
            return {...initialState, jobLocation:getUserFromLocalStorage()?.location || ''}
        },
        setEditeJob: (state, { payload }) => {
            return {...state, isEditing: true, ...payload};
        }
    },
    extraReducers: {
        [createJob.pending]: (state) => {
          state.isLoading = true;
        },
        [createJob.fulfilled]: (state, action) => {
          state.isLoading = false;
          toast.success('Job Created');
        },
        [createJob.rejected]: (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        },
        [deleteJob.fulfilled]: (state, { payload }) => {
            toast.success(payload)           
        },
        [deleteJob.rejected]: (state, { payload }) => {
            toast.error(payload)
        },
        [editJob.pending]: (state) => {
            state.isLoading = true;
        },
        [editJob.fulfilled]: (state, action) => {
            state.isLoading = false;
            toast.success('Job Modified...');
        },
        [editJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    }
});



export const { handleChange, clearValues, setEditeJob } = jobSlice.actions;
export default jobSlice.reducer;