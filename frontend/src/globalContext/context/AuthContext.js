import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "../reducers/AuthReducer";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
    // Initialize state from localStorage or null
    const initialState = JSON.parse(localStorage.getItem('userInfo')) || null;
    const [userInfo, dispatch] = useReducer(AuthReducer, initialState);

    // Update localStorage whenever userInfo changes
    useEffect(() => {
        if (userInfo) {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        } else {
            localStorage.removeItem('userInfo');
        }
    }, [userInfo]);

    // Provide a logout function
    const logout = () => {
        localStorage.removeItem('userInfo');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <authContext.Provider value={{ userInfo, dispatch, logout }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;