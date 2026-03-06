import { createSlice } from "@reduxjs/toolkit";

export type bookAttribute = {
    id: string,
    judul: string,
    deskripsi: string,
    tahun: string,
    kategori: string,
    status: string,
    peminjam: null,
    imageUrl: string
}

type bookState = {
    books: bookAttribute[] | null;
}

const initialState: bookState = {
    books: null
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBook(state, action) {
            state.books = action.payload
        },

        setBooksDetail(state, action) {
            state.books = action.payload
        }
    }
})

export const bookAction = bookSlice.actions;
export default bookSlice.reducer;