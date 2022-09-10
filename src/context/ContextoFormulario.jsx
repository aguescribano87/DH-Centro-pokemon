// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useState } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [dataForm, setDataForm] = useState()

    return <DataContext.Provider value={{dataForm, setDataForm}}>
        {children}
    </DataContext.Provider>
}
