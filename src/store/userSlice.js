import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
        token: null,
        id: null
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.accessToken;
            state.id = action.payload.uid;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;