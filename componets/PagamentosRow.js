import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { IconButton } from "react-native-paper";
import { PagamentosContext, usePagamentosContext } from "../shared/contexts/pagamentosContext"

const PagamentosRow = ({ id, date, value, type }) => {

    const { addPagamento, removePagamento } = usePagamentosContext();

    return (

        <View style={estilos.ValorData}>

            <Text style={estilos.fonteInput}>{Number.parseFloat(value).toFixed(2)}</Text>
            <Text style={estilos.fonteInput}>{date}</Text>
            <IconButton
                icon="delete"
                size={20}
                onPress={() => removePagamento(id)}
            />
        </View>
    )
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
    },

    fonteInput: {
        marginLeft: 30,
        marginRight: 10,
        fontSize: 18,
    },


});
export default PagamentosRow;

