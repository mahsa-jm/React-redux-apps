import customFetch from "../../utils/axios";
import { UserLogout } from "./userSlice";
import clearValues from '../job/jobSlice';
import clearAllJobsState from '../allJobs/allJobsSlice';

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
      const resp = await customFetch.post(url, user);
      return resp.data;
    } catch (error) {
      // thunkAPI.dispatch(UserLogout());
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
      const resp = await customFetch.patch(url, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(UserLogout(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve;
  } catch (error) {
    return Promise.reject;
  }
}