import React from 'react'

const AuthReducer = (state, action) => {
  switch(action.type){
    case 'SET_CRED':
        localStorage.setItem('userInfo', JSON.stringify(action.payload))
        return {
            ...state,
            name:  action.payload.name,
            email:  action.payload.email,
            _id:  action.payload._id
        }
    case 'DEL_CRED':
        localStorage.removeItem('userInfo')
        return null
  }
}

export default AuthReducer