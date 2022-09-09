import { createContext, useContext } from 'react';

export const ClassContext = createContext();

export function useClass() {
    return useContext(ClassContext);
}
