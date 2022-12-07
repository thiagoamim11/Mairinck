import { createContext, useState } from "react";

const ProdutoContext = createContext();
ProdutoContext.displayName = "Produto"

function ProdutoContextProvider({ children }) {
    const [produto, setProduto] = useState([]);
    return (
        <ProdutoContext.Provider value={{ produto, setProduto }}>
            {children}
        </ProdutoContext.Provider>
    )
}

export { ProdutoContext, ProdutoContextProvider }