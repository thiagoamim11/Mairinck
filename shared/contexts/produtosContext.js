import { createContext, useContext, useState } from "react";

const ProdutosContext = createContext();
ProdutosContext.displayName = "Produtos"

function ProdutosContextProvider({ children }) {
    const [produtos, setProdutos] = useState([]);

    return (
        <ProdutosContext.Provider value={{ produtos, setProdutos }}>
            {children}
        </ProdutosContext.Provider>
    )
}

function useProdutosContext() {
    const { produtos, setProdutos } = useContext(ProdutosContext)

    function addProduto(item) {
        console.log('addProduto');
        console.log(item);

        const produto = produtos.find(i => i.id === item.id)
        if (!produto) {
            setProdutos(prevProdutos => [...prevProdutos, item])
        } else {
            setProdutos(produtos.map(p => {
                if (p.id === item.id)
                    p.qtd += 1
                return p
            }))
        }
    }

    function removeProduto(id) {
        const produto = produtos.find(i => i.id === id)
        if (produto) {
            if (produto.qtd === 1) {
                setProdutos(prevProdutos => prevProdutos.filter(itemProdutos => itemProdutos.id !== id))
                produto.qtd = 0;
            } else {
                setProdutos(produtos.map(p => {
                    if (p.id === id)
                        p.qtd -= 1
                    return p
                }))
            }

        }
    }

    function deleteProduto(id) {
        const produto = produtos.find(i => i.id === id)
        if (produto) {
            setProdutos(prevProdutos => prevProdutos.filter(itemProdutos => itemProdutos.id !== id))
            produto.qtd = 0;
        }
    }

    return { produtos, setProdutos, addProduto, removeProduto, deleteProduto }
}

export { ProdutosContext, ProdutosContextProvider, useProdutosContext }