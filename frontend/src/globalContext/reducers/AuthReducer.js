import React from 'react'

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CRED':
            return action.payload;
        case 'LOGOUT':
            return null;
        case 'UPDATE_USER':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default AuthReducer