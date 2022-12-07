import { createContext, useContext, useState } from "react";
import uuid from 'react-native-uuid';
const PagamentosContext = createContext();
PagamentosContext.displayName = "Pagamentos"

function PagamentosContextProvider({ children }) {
    const [pagamentos, setPagamentos] = useState([]);

    return (
        <PagamentosContext.Provider value={{ pagamentos, setPagamentos }}>
            {children}
        </PagamentosContext.Provider>
    )
}

function usePagamentosContext() {
    const { pagamentos, setPagamentos } = useContext(PagamentosContext)

    function addPagamento(item) {
        const pagamento = pagamentos.find(i => i.id === item.id)
        if (!pagamento) {
            item.id = uuid.v4();
            setPagamentos(prevPagamentos => [...prevPagamentos, item])
        }
    }

    function removePagamento(id) {
        const pagamento = pagamentos.find(i => i.id === id)
        if (pagamento) {
            setPagamentos(prevPagamentos => prevPagamentos.filter(itemPagamentos => itemPagamentos.id !== id))
        }
    }

    return { pagamentos, setPagamentos, addPagamento, removePagamento }
}

export { PagamentosContext, PagamentosContextProvider, usePagamentosContext }