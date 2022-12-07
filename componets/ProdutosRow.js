import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { IconButton } from "react-native-paper";
import { ProdutosContext, useProdutosContext } from "../shared/contexts/produtosContext"

const ProdutosRow = ({ id, name, price, qtd }) => {

    const { addProduto, removeProduto, deleteProduto } = useProdutosContext();

    return (
        <View style={styles.prod}>

            <Text>{name} R$  </Text>

            <View >
                <Text>{Number.parseFloat(price).toFixed(2)} </Text>
            </View>


            <View>
                <Text> {qtd}</Text>
            </View>
            <Text>KG</Text>

            <View style={styles.icon}>
                <IconButton
                    icon="plus"
                    size={20}
                    onPress={() => addProduto({ id, name, price })}
                />

                <IconButton
                    icon="minus"
                    size={20}
                    onPress={() => removeProduto(id)}
                />

                <IconButton
                    icon="delete"
                    size={20}
                    onPress={() => deleteProduto(id)}
                />
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',

    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
    },
    col: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    botoes: {
        justifyContent: 'space-around',
        display: 'flex',
        gap: 40,
        flexDirection: 'row-reverse',
        marginTop: '5%',
    },

    botao: {
        borderRadius: 20,
    },
    input: {
        fontSize: 15,
    },

    texto: {

    },
    quantidade: {

    },
    place: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,

    },
    border: {
        height: 30,
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        borderColor: '#0E6643'
    },
    quant: {
        height: 30,
        borderWidth: 1,
        padding: 5,
        width: 50,
        marginRight: 10,
        borderRadius: 25,
        borderColor: '#0E6643',
    },
    text: {
        color: 'green',
        paddingTop: 60,
        paddingLeft: 40,
    },
    prod: {
        paddingTop: 3,
        paddingLeft: 40,
        marginBottom: 9,
        flexDirection: 'row'
    },
    prod1: {
        paddingLeft: 40,
        flexDirection: 'row'

    },

    tot: {
        marginLeft: 130,
        height: 38,
        margin: 50,
        width: 130,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        borderColor: '#0E6643',
        marginTop: '12%',
        fontSize: 20,
        fontWeight: "bold"

    },
    icon: {
        flexDirection: 'row',
        marginVertical: -10,
        marginLeft: 20,
        marginBottom: -9
    },
    icon2: {
        flexDirection: 'row',
        marginVertical: -10,
        marginLeft: 21,
    },
    cafe: {
        height: 22,
    },
    soja: {
        height: 22,
    }


});

export default ProdutosRow;

