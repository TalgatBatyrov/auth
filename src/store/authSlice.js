import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {

    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;