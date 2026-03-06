import { createSlice } from "@reduxjs/toolkit";

export type bookDetails = {
    id: string,
    judul: string,
    deskripsi: string,
    tahun: string,
    kategori: string,
    status: string,
    peminjam: null,
    imageUrl: string
}

type bookDetailState = {
    books: bookDetails | null;
}

const initialState: bookDetailState = {
    books: null
}

const bookDetailSlice = createSlice({
    name: "bookDetails",
    initialState,
    reducers: {
        setBooksDetail(state, action) {
            state.books = action.payload
        }
    }
})

export const bookDetailsAction = bookDetailSlice.actions;
export default bookDetailSlice.reducer;