import HomePage from "../pages/HomePage";
import BookDetails from "../pages/BookDetail";
import BookUpdate from "../pages/BookUpdate";
import { Route, Routes } from 'react-router';

function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/book-details/:id" element={<BookDetails/>}></Route>
            <Route path="/book-update/:id" element={<BookUpdate/>}></Route>
        </Routes>
    )
}

export default AppRouter; 