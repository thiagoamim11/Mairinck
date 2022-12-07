import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native';
import React from 'react';
import { ClienteContext } from "../shared/contexts/clienteContext"
import { useContext } from "react"


const Cliente = () => {

    const { cliente } = useContext(ClienteContext)

    return (
        <View style={estilos.container}>
            <View style={estilos.view}>
                <Text style={estilos.texto}>Vendedor: </Text>
                <Text style={estilos.input}>Fulano</Text>
            </View>
            {cliente.name && <View style={estilos.view}>
                <Text style={estilos.texto}>Cliente: </Text>
                <Text style={estilos.input}>{cliente.name}</Text>
            </View>}
        </View>
    );

}

export default Cliente;


const estilos = StyleSheet.create({
    container: {
        paddingTop: 30,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        height: 50,
        flexDirection: 'row',
        paddingRight: 10,
    },

    view: {
        display: 'flex',
        flexDirection: 'row'
    },

    input: {
        fontSize: 15,
        color: '#ccc'
    },

    texto: {
        marginLeft: 15
    }
});
