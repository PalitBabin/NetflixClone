const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: null
            };
        case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: null
            };
        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true
            };
        case "CREATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case "CREATE_MOVIE_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: null
            };
        case "CREATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            };
            case "UPDATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case "UPDATE_MOVIE_SUCCESS":
            return {
                movies: state.movies.map((movie)=>movie._id === action.payload._id && action.payload),
                isFetching: false,
                error: null
            };
        case "UPDATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case "DELETE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case "DELETE_MOVIE_SUCCESS":
            return {
                movies: state.movies.filter(movie => movie._id !== action.payload),
                isFetching: false,
                error: null
            };
        case "DELETE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
}

export default MovieReducer;