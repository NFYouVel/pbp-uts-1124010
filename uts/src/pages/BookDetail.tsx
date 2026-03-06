import { useSelector } from "react-redux";
// import { useParams } from "react-router";
import type { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { borrowRequest, getBookDetailRequest, returnBookRequest } from "../api/api";
import { useNavigate, useParams } from "react-router";
import { bookDetailsAction } from "../store/bookDetailsSlice";
import { Paper, Card, CardContent, Typography, CardMedia, TextField, Button } from "@mui/material";


function BookDetails() {

    // Use Params
    const { id } = useParams()

    // Variable
    const [name, setName] = useState<string>()

    // Use Selector
    const bookDetails = useSelector((state: RootState) => state.bookDetails.books);

    // Dispatch
    const dispatch = useAppDispatch();
    useEffect(() => {
        getBookDetailRequest(id ?? '').then((res) => {
            dispatch(bookDetailsAction.setBooksDetail(res.data));
        })
    }, [])

    // Navigate
    const navigate = useNavigate();


    // If The Books Is Borrowed
    const returnBooks = async () => {
        const response = await returnBookRequest(id ?? '')

        if (response.status !== 200) {
            console.log(response);
            alert("Kembalikan buku berhasil")
            navigate("/")
            return;
        }

    }

    // If The Books Is Unborrowed
    const borrow = async () => {
        const response = await borrowRequest(name ?? '', id ?? '')

        if (response.status !== 200) {
            console.log(response);
            return;
        } else {
            console.log("Perubahan nama " + name + " berhasil")
        }
    }

    if (bookDetails?.status == "borrowed") {
        return (
            <div>
                <Paper elevation={24} sx={{ maxWidth: "50%" }}>
                    <Card sx={{ maxWidth: "100%", bgcolor: 'grey.200', height: "100%", marginTop: "10px" }}>
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Deskripsi: </span>{bookDetails?.deskripsi}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Kategori: </span>{bookDetails?.kategori}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Peminjam: </span>{bookDetails?.peminjam}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>kategori: {bookDetails?.kategori}</span>
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Created At: </span>{bookDetails?.tahun}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Updated At: </span>{bookDetails?.status}
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200px"
                                width="50"
                                image={bookDetails?.imageUrl}
                            />
                        </CardContent>
                    </Card>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <span>Peminjam: </span>{bookDetails?.peminjam}
                    </Typography>

                    <Button onClick={returnBooks}>
                        Kembalikan
                    </Button>
                </Paper>
            </div>
        )
    } else {
        return (
            <div>
                <Paper elevation={24} sx={{ maxWidth: "50%" }}>
                    <Card sx={{ maxWidth: "100%", bgcolor: 'grey.200', height: "100%", marginTop: "10px" }}>
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Deskripsi: </span>{bookDetails?.deskripsi}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Kategori: </span>{bookDetails?.kategori}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Peminjam: </span>{bookDetails?.peminjam}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>kategori: {bookDetails?.kategori}</span>
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Created At: </span>{bookDetails?.tahun}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span>Updated At: </span>{bookDetails?.status}
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200px"
                                width="50"
                                image={bookDetails?.imageUrl}
                            />
                        </CardContent>
                    </Card>
                    <TextField
                        type="text"
                        label="Your name..."
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Button onClick={borrow}>
                        Borrow
                    </Button>
                </Paper>
            </div>
        )
    }

}

export default BookDetails;