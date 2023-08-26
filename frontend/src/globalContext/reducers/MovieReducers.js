import React from 'react'

const MovieReducers = (state, action) => {
  switch (action.type){
    case 'CHANGE_HOVER':
        return {
            ...state,
            hover: action.payload
        }
    case 'CHANGE_GENRE':
        return {
            ...state,
            genre: action.payload
        }
    case 'CHANGE_SEARCH':
        return {
            ...state,
            searchKey: action.payload
        }
    case 'CHANGE_PAGE':
        return {
            ...state,
            page: action.payload
        }
    case 'CHANGE_SHOWTYPE':
        return {
            ...state,
            showType: action.payload
        }
    default:
        return state
  }
}

export default MovieReducers