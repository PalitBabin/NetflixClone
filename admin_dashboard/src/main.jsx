import ReactDOM from "react-dom";
import App from "./App.jsx";
import AuthProvider from "./context/authContext/AuthContext.jsx";
import MovieProvider from "./context/movieContext/MovieContext.jsx";
import ListProvider from "./context/listContext/ListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <MovieProvider>
            <ListProvider>
                <App />
            </ListProvider>
        </MovieProvider>
    </AuthProvider>

);
