import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect } from "react";
import { getBooksRequest } from "../api/api";
import { bookAction } from "../store/bookSlice";
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Grid, Container } from "@mui/material";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function HomePage() {
    // const [posts, setPosts] = useState<post[]>([])
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     getPostRequest().then((res) => {
    //         dispatch(postAction.setPost(res.data))
    //         setPosts(res.data)
    //     })
    // }, [])

    const books = useSelector((state: RootState) => state.book.books);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getBooksRequest().then((res) => {
            dispatch(bookAction.setBook(res.data));
        })
    }, [dispatch])

    return (
        <Container>
            <Grid container>
                {books?.map((book) => (
                    <Grid size={3}>
                        <Card sx={{ height: "auto", marginBottom: 2, marginRight: 2, bgcolor: 'grey.200' }} key={book.id}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.judul}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {book.deskripsi}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="200px"
                                width="100px"
                                image={book.imageUrl}
                            />
                            <CardActions>
                                <Link to={'/book-details/' + book.id}>
                                    <Button size="small">View Details</Button>
                                </Link>

                                <Link to={'/book-update/' + book.id}>
                                    <Button size="small">Update Book</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default HomePage;
