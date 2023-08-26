import { Children, createContext, useContext, useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";



export const authContext = createContext()


const AuthContextProvider = ({children}) => {
    const [userInfo, dispatch] = useReducer(AuthReducer, (localStorage.getItem('userInfo') ? {
        email: null,
        name: null,
        _id: null
    } : null))
    
  return (
    <authContext.Provider value={{userInfo, dispatch}}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider