import { createSlice } from "@reduxjs/toolkit";

export type post = {
    id: string,
    title: string,
    content: string,
    status: string,
    userId: string,
    user: {
        name: string
    }
}

type postState = {
    posts: post[] | null;
}

const initialState: postState = {
    posts: null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost(state, action) {
            state.posts = action.payload
        }
    }
})

export const postAction = postSlice.actions;
export default postSlice.reducer;