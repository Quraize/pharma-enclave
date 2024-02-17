import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false
}

export const delSlice = createSlice({
    name: 'delete',
    initialState,
    reducers:{
        delStart: (state) => {
            state.loading = true;
        },
        delSuccess: (state) => {
            state.loading = false;
            state.error = false;
        },
        delFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { delStart, delSuccess, delFailure} = delSlice.actions;

export default delSlice.reducer;