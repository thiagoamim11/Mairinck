import { createContext, useState } from "react";

const ClienteContext = createContext();
ClienteContext.displayName = "Cliente"

function ClienteContextProvider({ children }) {
    const [cliente, setCliente] = useState([]);
    return (
        <ClienteContext.Provider value={{ cliente, setCliente }}>
            {children}
        </ClienteContext.Provider>
    )
}

export { ClienteContext, ClienteContextProvider }