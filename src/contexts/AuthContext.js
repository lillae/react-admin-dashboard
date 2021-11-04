import React, {useContext, useState} from 'react';
import {auth} from '../firebase';


const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider ({children}) {
    const [loading, setLoading] = useState(false);
    const value = {
        loading,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
