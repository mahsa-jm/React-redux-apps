import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const showStatsThunk = async (thunkAPI) => {
    try {
        const resp = await customFetch.get('/jobs/stats');
        return resp.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
};