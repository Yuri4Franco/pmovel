import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Plantel({id, time}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Elenco do {time}</Text>
            <Button
                title="Visualizar Jogadores"
                onPress={() => navigation.navigate('ListaJogadores', { id })}
            />
            <Button
                title="Adicionar Jogador"
                onPress={() => navigation.navigate('CadastroJogador', { id })}
            />
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    }
});

export default Plantel;
