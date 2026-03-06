import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice"
import bookDetailsReducer from "./bookDetailsSlice"

export const store = configureStore ({
    reducer: {
        book: bookReducer,
        bookDetails: bookDetailsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch