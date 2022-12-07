import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import Cliente from '../../componets/cliente';
import Drop from '../../componets/Drop';
import ProdutosRow from '../../componets/ProdutosRow';
import { ProdutosContext, useProdutosContext } from "../../shared/contexts/produtosContext"
import { ProdutoContext } from "../../shared/contexts/produtoContext"
import { useContext, useEffect, useState } from "react"

export default function Categoria({ navigation }) {

    const { produto } = useContext(ProdutoContext);
    const { produtos } = useContext(ProdutosContext);
    const { addProduto, removeProduto } = useProdutosContext();

    const [price, setPrice] = useState(0);
    const [qtd, setQtd] = useState(0);

    let sum = 0;

    useEffect(() => {
        setPrice(produto.price);
        name = produto.name;
        id = produto.id;
    }, [produto])

    return (

        <SafeAreaView>

            <Cliente />

            <Drop />

            <View style={styles.container}>
                <View style={styles.col}>
                    <View style={styles.flex}>
                        <Text style={styles.texto}>Preço Sugerido: R$ </Text>
                        <Text style={styles.input}>{produto.price}</Text>
                    </View>
                    <TextInput style={styles.border}
                        editable={true} placeholder="novo valor "
                        keyboardType='numeric'
                        value={price}
                        onChangeText={e => setPrice(Number(e))}
                    />



                </View>

                <View style={styles.col}>
                    <Text style={styles.flex}>Quantidade</Text>

                    <View style={styles.flex}>
                        <TextInput style={styles.quant}
                            placeholder="0"
                            keyboardType='numeric'
                            value={qtd}
                            onChangeText={e => setQtd(Number(e))}
                        />
                        <Button
                            title='adicionar'
                            color='green'
                            onPress={() => addProduto({ id, name, price, qtd })}
                        />
                    </View>
                </View>


            </View>


            <Text style={styles.text}>PRODUTOS</Text>

            {produtos.map(product => (
                <ProdutosRow {...product} key={product.id} />
            ))}

            {
                produtos.forEach(product => {
                    sum += product.price * product.qtd
                })
            }

            <View style={styles.tot}>
                <Text>TOTAL R$ {Number.parseFloat(sum).toFixed(2)}</Text>
            </View>


            <View style={styles.botoes}>

                <Button
                    title='AVANÇAR'
                    color='green'
                    onPress={() => navigation.navigate('Pagamento')}
                />

                <Button
                    color='red'
                    title="CANCELAR"
                    onPress={() => Alert.alert('PEDIDO CANCELADO')}
                />


            </View>


        </SafeAreaView>


    );

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