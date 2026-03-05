import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function HomePage() {

    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div>
            <h1>Home</h1>
            <p>Hello {user?.name}</p>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default HomePage;
