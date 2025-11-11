// src/presentation/context/AuthContext.tsx
import { User, UserCredential } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthService } from '../../src/data/services/firebase.config';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const isUserCredential = (obj: any): obj is UserCredential => {
    return obj && typeof obj === 'object' && 'user' in obj;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = AuthService.onAuthChange((u: User | null) => {
            setUser(u);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        const result = await AuthService.login(email, password);
        const newUser = isUserCredential(result) ? result.user : (result as User | null);
        setUser(newUser);
    };

    const register = async (email: string, password: string) => {
        const result = await AuthService.register(email, password);
        const newUser = isUserCredential(result) ? result.user : (result as User | null);
        setUser(newUser);
    };

    const logout = async () => {
        await AuthService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};