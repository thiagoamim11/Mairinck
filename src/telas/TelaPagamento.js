import { SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Cliente from '../../componets/cliente';
import { TextInput } from 'react-native-gesture-handler';
import PagamentosRow from '../../componets/PagamentosRow';
import { PagamentosContext, usePagamentosContext } from "../../shared/contexts/pagamentosContext"
import { ProdutosContext, useProdutosContext } from "../../shared/contexts/produtosContext"
import { useContext, useEffect, useState } from "react"
import { TextInputMask } from "react-native-masked-text"
import SelectList from 'react-native-dropdown-select-list'


export default function Pagamento({ navigation }) {
    let sum = 0;
    let pago = 0;

    const { produtos } = useContext(ProdutosContext);
    const [selected, setSelected] = React.useState("");

    const formaPagamento = [
        { key: '1', value: 'Dinheiro' },
        { key: '2', value: 'Débito' },
        { key: '3', value: 'Crédito' },
        { key: '4', value: 'Pix' },
    ];

    const { pagamentos } = useContext(PagamentosContext);
    const { addPagamento, removePagamento } = usePagamentosContext();

    const [date, setDate] = useState('');
    const [value, setValue] = useState(0);
    const [type, setType] = useState('');

    return (
        <SafeAreaView>
            <Cliente />

            <View style={estilos.pagamento}>
                <Text style={estilos.pagamentoTexto}>Forma de Pagamento</Text>
            </View>
            {
                produtos.forEach(product => {
                    sum += product.price * product.qtd
                })
            }
            <View style={estilos.total}>
                <Text style={estilos.total1}>Total: </Text>
                <Text style={estilos.total2}>R$ {Number.parseFloat(sum).toFixed(2)}</Text>
            </View>

            {
                pagamentos.forEach(pag => {
                    pago += pag.value
                })
            }
            <View style={estilos.total3}>
                <Text style={estilos.totalPago}>Valor pago: </Text>
                <Text style={estilos.borda}> R$ {Number.parseFloat(pago).toFixed(2)}</Text>
            </View>

            <View style={estilos.select} >
                <SelectList data={formaPagamento} setSelected={setSelected} placeholder="Formas de pagamento" />
            </View>

            <View style={estilos.containerValor}>
                <TextInput style={estilos.borda1} placeholder="0,00"
                    onChangeText={e => setValue(Number(e))} placeholder="valor" />
                <TextInputMask
                    style={estilos.borda1}
                    type={'datetime'}
                    placeholder="dd/mm/aaaa"
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    onChangeText={e => setDate(e)}
                />

                <View style={estilos.adicionar}>
                    <Button title='Adicionar' color='green' onPress={() => addPagamento({ id, date, value, type })} />
                </View>
            </View>

            <View><Text style={estilos.textoPagamento}>Pagamentos</Text></View>
            <View style={estilos.ValorData}>
                <View>
                    <Text style={estilos.fonte}>Valor</Text>
                </View>
                <View>
                    <Text style={estilos.fonte}>Data</Text>
                </View>


            </View>
            {pagamentos.map(pagamento => (
                <PagamentosRow {...pagamento} key={pagamento.id} />
            ))}

            <View style={estilos.botoes}>

                <Button
                    title='AVANÇAR'
                    color='green'
                    onPress={() => navigation.navigate('Confirmar Dados')}
                />

                <Button
                    color='red'
                    title="VOLTAR"
                    onPress={() => navigation.navigate('Categoria Produto')}
                />

            </View>
        </SafeAreaView>
    );
}



const estilos = StyleSheet.create({
    bar: {
        height: 50,
        position: 'absolute',
        backgroundColor: 'blue',
    },

    botao: {
        justifyContent: 'center',
        marginHorizontal: 16,
        flexDirection: 'row-reverse',
        marginTop: '32%',


    },
    botoes: {
        justifyContent: 'space-around',
        display: 'flex',
        gap: 40,
        flexDirection: 'row-reverse',
        marginTop: '32%',
    },


    esquerdo: {
        paddingRight: 190,
    },

    direito: {// tag vazia

    },

    pagamentoTexto: {
        fontWeight: 'none',
        fontSize: 23,
    },

    pagamento: {
        padding: 20,
    },

    total: {  //refere a view onde tem o texto e o valor do total
        flexDirection: 'row',
        paddingLeft: 25,
    },

    select: {

        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 20
    },

    total1: { //refere a o texto Total
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
    },

    total2: { //refere a o valor numerico do total
        fontSize: 18,
    },

    borda: { // refere a borda do input 
        borderWidth: 1,
        width: 100,
        borderRadius: 10,
        marginLeft: 10,
        color: 'green',
        borderColor: 'green',
        height: 26,
        fontSize: 18,
    },

    borda1: { // borda do segundo input do valor valor
        borderWidth: 1,
        width: 100,
        borderRadius: 20,
        paddingLeft: 8,


    },

    borda2: {
        textAlign: 'center',
        borderWidth: 1,
        width: 100,
        borderRadius: 20,

    },

    containerValor: { // container do input de valor e data
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    total3: { //refere a view onde tem o valor pago e o input
        justifyContent: "flex-start",
        flexDirection: 'row',
        padding: 10,
        marginLeft: 15,

    },

    totalPago: { //refere a palavra Valor pago
        fontSize: 17,
        color: 'green'
    },

    adicionar: { //botao adicionar
        borderWidth: 1,
        marginRight: 10,

    },

    textoPagamento: {// refere a o texto pagamento em baixo de valor e data
        fontSize: 19,
        color: 'green',
        fontWeight: 'bold',
        paddingTop: 20,
        marginLeft: 27,
        marginTop: 30,
        paddingBottom: 15,
    },

    ValorData: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center'

    },

    fonte: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 30,
        marginRight: 10,

    },

    fonteInput: {
        marginLeft: 30,
        marginRight: 10,
        fontSize: 18,
    },


});