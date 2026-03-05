import { createSlice } from "@reduxjs/toolkit";

type UserInfo = {
    id: string;
    name: string;
    role: string;
    email: string;
}

type AuthState = {
    user: UserInfo | null;
}

const initialState: AuthState = {
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo(state, action) {
            state.user = action.payload;
        },

        logout(state) {
            state.user = null;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;



