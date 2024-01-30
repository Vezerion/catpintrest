import { catsAPI } from "../api/api"

let initialState = {
    cats: [],
    favoriteCats: [],
    favoriteCatsID: [],
    page: 1,
    isFethcing: false
}

export function catsReducer(state = initialState, action) {
    switch (action.type) {
        case 'setCats': 
            return {
                ...state,
                cats: [...state.cats, ...action.cats]
            }
        case 'fetch':
            return {
                ...state,
                isFethcing: action.isFethcing
            }
        case 'nextPage':
            return {
                ...state,
                page: state.page + 1
            }
        case 'addCat':
            return {
                ...state,
                favoriteCats: [...state.favoriteCats, {...action.data}],
                favoriteCatsID: [...state.favoriteCatsID, action.data.id]
            }
        case 'removeCat':
            return {
                ...state,
                favoriteCats: state.favoriteCats.filter(cat => cat.id !== action.id && cat.url !== action.url),
                favoriteCatsID: state.favoriteCatsID.filter(id => id !== action.id)
            }
        default:
            return {
                ...state
            }
    }
}

export function setCats(cats) {
    return {
        type: 'setCats',
        cats
    }
}

export function toggleFetching(isFethcing) {
    return { 
        type: 'fetch',
        isFethcing
    }
}

export function nextPage() {
    return {
        type: 'nextPage'
    }
}

export function addCatToFavorite(id, url) {
    return {
        type: 'addCat',
        data: {id, url}
    }
}

export function removeCatFromFavorite(id, url) {
    return {
        type: 'removeCat',
        id, 
        url
    }
}

//Thunk

export const getCats = (page = 0) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        catsAPI.getCats(page).then(data => {
            dispatch(setCats(data))
            dispatch(toggleFetching(false));
        });
        
    }
}

export const getMoreCats = (page = 0) => {
    return (dispatch) => {
        dispatch(nextPage())
        catsAPI.getCats(page).then(data => {
            dispatch(setCats(data))
        });
        
    }
}
