// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useContext, useReducer } from "react"
import { formReducer, initialStore } from "./formReducer"

export const DataContext = createContext()

export const DataProvider = ({ children }) =>
    <DataContext.Provider value={useReducer(formReducer, initialStore)}>
        {children}
    </DataContext.Provider>

export const useStore = () => useContext(DataContext)[0]
export const useDispatch = () => useContext(DataContext)[1]