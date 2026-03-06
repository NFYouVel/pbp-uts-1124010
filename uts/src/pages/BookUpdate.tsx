import { useEffect, useState } from "react";
import { getBookDetailRequest, updateBookRequest } from "../api/api";
import { useParams } from "react-router";
import { bookDetailsAction } from "../store/bookDetailsSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { TextField, Button } from "@mui/material";

function BookUpdate() {

    // Variable
    const [ judul, setJudul] = useState('')
    const [ deskripsi, setDeskripsi] = useState('')
    const [ tahun, setTahun] = useState('')
    const [ kategori, setKategori] = useState('')

    // Use Params
    const { id } = useParams()

    // Dispatch
    const dispatch = useAppDispatch();

    const updateBook = async () => {
            const response = await updateBookRequest(id ?? '', judul ?? '', deskripsi ?? '', tahun ?? '', kategori ?? '');
    
            if (response.status !== 200) {
                console.log(response);
                return;
            }
        };

    useEffect(() => {
        getBookDetailRequest(id ?? '').then((res) => {
            dispatch(bookDetailsAction.setBooksDetail(res.data));
        })
    }, [])

    return (
        <div style={{display: "flex", flexDirection:"column"}}>
            <TextField
                type="text"
                label="Judul"
                onChange={(e) => setJudul(e.target.value)}
            />

            <TextField
                type="text"
                label="Deskripsi"
                onChange={(e) => setDeskripsi(e.target.value)}
            />

            <TextField
                type="text"
                label="Tahun"
                onChange={(e) => setTahun(e.target.value)}
            />

            <TextField
                type="text"
                label="Kategori"
                onChange={(e) => setKategori(e.target.value)}
            />

            <Button onClick={updateBook}>
                Update Book!
            </Button>
        </div>
    )
}

export default BookUpdate;