import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useClass() {
    return useContext(AuthContext);
}
