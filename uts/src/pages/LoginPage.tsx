import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { authActions } from "../store/authSlice";
import { loginRequest, getUserInfo } from "../api/api";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login = async () => {
        const response = await loginRequest(email, password);

        // if (response.status !== 200) {
        //     alert("Login failed: " + response.data.message);
        //     console.log(response);
        //     return;
        // }

        const userData = await getUserInfo();

        dispatch(authActions.setUserInfo(userData.user));

        navigate("/home");
    };

    return (
        <div>
            <h1>Login</h1>

            <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={login}>
                Login
            </Button>

        </div>
    );
}

export default LoginPage;
