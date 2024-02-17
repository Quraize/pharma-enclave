import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        loading: false,
        error: false,
};

export const addSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        addStart: (state) =>{
            state.loading= true;
        },
        addSuccess:(state) =>{
                state.loading= false;
                state.error= false;
        },
        addFailure: (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {addStart,addSuccess, addFailure} = addSlice.actions;

export default addSlice.reducer;