import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { registerUserThunk, updateUserThunk, loginUserThunk, clearStoreThunk } from "./userThunk";


const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage(),
};

const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
      return registerUserThunk('/auth/register', user, thunkAPI);
    });

const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        return loginUserThunk('/auth/login', user, thunkAPI);
});

const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkAPI) => {
        return updateUserThunk('auth/updateUser', user, thunkAPI)
    }
);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        UserLogout: (state,{payload}) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if(payload) {
                toast.success(payload)
            }
        }
    },
    extraReducers:{
        [registerUser.pending]: (state) =>{
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user)
            toast.success(`Hello There ${user.name}`)
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [loginUser.pending]: (state) =>{
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            
            toast.success(`Welcome Back ${user.name}`)
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [updateUser.pending]: (state) =>{
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            
            toast.success(`User Updated`)
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [clearStore.rejected]: () => {
            toast.error('There was an error...')
        }

    }
})

export const { toggleSidebar, UserLogout } = userSlice.actions;
export default userSlice.reducer;
export { loginUser, registerUser, updateUser }