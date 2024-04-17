import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isopen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isopen = true;
        },
        closeModel: (state, action) => {
            state.isopen = false
        },
    }
});

export default modalSlice.reducer;
export const { openModal, closeModel } = modalSlice.actions;