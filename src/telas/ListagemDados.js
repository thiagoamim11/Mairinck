import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import Cliente from '../../componets/cliente';
import ProdutosRow from '../../componets/ProdutosRow';
import PagamentosRow from '../../componets/PagamentosRow';
import { ProdutosContext, useProdutosContext } from "../../shared/contexts/produtosContext"
import { PagamentosContext, usePagamentosContext } from "../../shared/contexts/pagamentosContext"

import { useContext, useEffect, useState } from "react"

export default function Dados({ navigation }) {

    const { produtos } = useContext(ProdutosContext);
    const { pagamentos } = useContext(PagamentosContext);

    return (

        <SafeAreaView>
            <View>
                <Cliente />

                <Text style={estilos.prod}>PRODUTOS</Text>
                <View>

                    {produtos.map(product => (
                        <ProdutosRow {...product} key={product.id} />
                    ))}

                    <View style={estilos.adicionar}>
                        <Button
                            title='Alterar'
                            color='green'
                            onPress={() => navigation.navigate('Categoria Produto')}
                        />
                    </View>

                </View>

                <View style={estilos.pag}><Text style={estilos.pag2}>Pagamentos</Text></View>

                {pagamentos.map(pagamento => (
                    <PagamentosRow {...pagamento} key={pagamento.id} />
                ))}




                <View style={estilos.adicionar}><Button title='Alterar' color='green' onPress={() => navigation.navigate("Pagamento")} /></View>



                <View style={estilos.total}>
                    <Text style={estilos.total1}>Observação: </Text>
                    <TextInput style={estilos.fonteInput2}></TextInput>

                </View>

                <View style={estilos.obs}><Text>Observação pedido/entrega/cliente</Text></View>

                <View style={estilos.botoes}>

                    <Button
                        title='CONFIRMAR'
                        color='green'
                        onPress={() => Alert.alert('Pedido Confirmado')}

                    />


                    <Button
                        color='red'
                        title="VOLTAR"
                        onPress={() => navigation.navigate('Pagamento')}
                    />


                </View>
            </View>
        </SafeAreaView>
    );
}



const estilos = StyleSheet.create({

    viewcontainer: {
        paddingRight: 120,
    },

    botoes: {
        justifyContent: 'space-around',
        display: 'flex',
        gap: 40,
        flexDirection: 'row-reverse',
        marginTop: '35%',
    },
    bar: {
        height: 50,
        position: 'absolute',
        backgroundColor: 'blue',
    },

    botao: {
        justifyContent: 'center',
        marginHorizontal: 16,
        flexDirection: 'row-reverse',

    },
    direito: {

    },

    esquerdo: {
        paddingRight: 190,
    },



    total: {  //refere a view onde tem o texto e o valor do total
        flexDirection: 'row',
        paddingLeft: "10%",
        paddingTop: 45,


    },

    total1: { //refere a o texto Total
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
    },

    total2: { //refere a o valor numerico do total
        fontSize: 18,
    },

    fonteInput2: {
        fontSize: 18,
        borderWidth: 1,
        width: 200,
        borderRadius: 20,
        paddingLeft: 8,

    },


    obs: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
    },




    // separaçao

    ValorData: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: -90,
        paddingTop: 20,
        paddingBottom: 20,

    },

    fonte: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    adicionar: { //botao adicionar
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        width: 140,
        left: 10
    },

    container: { // container do input de valor e data
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    botaoContainer: {
        marginRight: -50,
    },



    prod: {
        color: 'green',
        marginLeft: '10%',
        fontSize: 17,
        marginTop: 40,
    },
    cafe: {
        height: 22
    },
    soja: {
        height: 22,
    },
    icon: {
        flexDirection: 'row',
        marginVertical: -10,
        marginLeft: 20,
        marginBottom: -9
    },
    prod1: {
        paddingTop: 3,
        paddingLeft: 40,
        marginBottom: 9,
        flexDirection: 'row'
    },
    prod2: {
        paddingLeft: 40,
        flexDirection: 'row'
    },
    icon2: {
        flexDirection: 'row',
        marginVertical: -10,
        marginLeft: 25,
    },
    button: {
        marginVertical: 30,

    },

    pag: {
        marginTop: 20,
        marginLeft: '10%',
    },

    pag2: {
        fontSize: 18,
        color: 'green',

    },

    val: {
        marginLeft: "10%",
    }

});
