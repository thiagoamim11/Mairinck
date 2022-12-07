import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'
import { ClienteContext } from "../shared/contexts/clienteContext"
import { ProdutoContext } from "../shared/contexts/produtoContext"
import { useContext } from "react"

const baseClientes = require('../shared/mock/clientes.json')
const baseProdutos = require('../shared/mock/produtos.json')

let lista_clientes = baseClientes.map((item) => {
  return { key: item, value: item.name }
})

let lista_produtos_semfiltro = baseProdutos.map((item) => {
  return { key: item, value: item.name }
})

const Drop = () => {
  const [selected, setSelected] = React.useState("");
  const [lista_produtos, setLista_produtos] = React.useState(lista_produtos_semfiltro);

  const { cliente, setCliente } = useContext(ClienteContext);
  const { produto, setProduto } = useContext(ProdutoContext);


  const cat = [
    { key: '1', value: 'Grão' },
    { key: '2', value: 'Agrotoxico' },
    { key: '3', value: 'Semente' },
  ];

  function filtraProdutos(category) {

    console.log('Selecionado ' + category);

    console.log(lista_produtos_semfiltro);

    setLista_produtos(lista_produtos_semfiltro.filter(itemProdutos => itemProdutos.key.category == category));

  }

  return (
    <View style={estilos.container}>

      <View style={estilos.cli}>
        <SelectList data={lista_clientes} setSelected={setSelected} onSelect={() => setCliente(selected)} placeholder="Selecione o Cliente" />
      </View>

      <View style={estilos.cat}>
        <SelectList data={cat} setSelected={setSelected} placeholder="Selecione a Categoria" onSelect={() => filtraProdutos(selected)} />
      </View>

      <View>
        <SelectList data={lista_produtos} setSelected={setSelected} placeholder="Selecione o Produto" onSelect={() => setProduto(selected)} />
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  cli: {
    marginBottom: 20
  },

  cat: {
    marginBottom: 20,
  }

})


export default Drop;