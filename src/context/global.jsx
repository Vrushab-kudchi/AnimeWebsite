import { createContext, useReducer ,useEffect} from "react";

const Global = createContext();

const baseUrl = "https://api.jikan.moe/v4"

//Action

const SEARCH = "SEARCH";
const LOADING = "LOADING";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_AIME";

const reducer = (state, action) => {
    switch (action.type)
    {
        case LOADING:
            return { ...state, loading: true }
        case GET_POPULAR_ANIME:
            return { ...state, popularAnime: action.payload, loading: false }
        default:
            return state;
    }
}


const GlobalProvider = ({ children }) => {
    const initalState = {
        popularAnime: [],
        airingAnime: [],
        upComingAnime: [],
        picture: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const getpopularAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch('https://api.jikan.moe/v4/recommendations/anime');
        const data = await response.json();
        dispatch({type: GET_POPULAR_ANIME , payload: data.data})
    }

    useEffect(() => {
        getpopularAnime();
    },[])


    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <Global.Provider value={{...state}}>
            {children}
        </Global.Provider>
    )
}

export {Global, GlobalProvider};
