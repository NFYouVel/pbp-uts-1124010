import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { getPostRequest } from "../api/api";
import { postAction } from "../store/postSlice";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router";
import type { post } from "../store/postSlice";
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

    const posts = useSelector((state: RootState) => state.post.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getPostRequest().then((res) => {
            dispatch(postAction.setPost(res.records));
        })
    }, [])

    return (
        <div className="post-container">
            {posts?.map((post) => (
                <Card sx={{ maxWidth: "100%", marginBottom: 2, bgcolor: 'grey.200' }} key={post.id}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {post.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={'/post-details/' + post.id}>
                            <Button size="small">View Details</Button>
                        </Link>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default HomePage;
