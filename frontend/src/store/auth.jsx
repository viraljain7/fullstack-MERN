import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storetokenInLs = (token) => {
        return localStorage.setItem("token", token)
    }

    return (
        <AuthContext.Provider value={{ storetokenInLs }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}