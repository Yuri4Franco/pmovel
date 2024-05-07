import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function CadastroJogador({ route }) {
    const [nome, setNome] = useState('');
    const [posicao, setPosicao] = useState('Goleiro');
    const { id } = route.params;
    console.log(id)

    const salvarJogador = () => {
        axios.post('http://localhost:3000/jogadores', {
            nome,
            posicao,
            time_id: id
        })
        .then(response => {
            alert('Jogador adicionado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao adicionar jogador', error);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do Jogador:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.label}>Posição:</Text>
            <Picker
                selectedValue={posicao}
                onValueChange={(itemValue, itemIndex) => setPosicao(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Goleiro" value="Goleiro" />
                <Picker.Item label="Zagueiro" value="Zagueiro" />
                <Picker.Item label="Meia" value="Meia" />
                <Picker.Item label="Atacante" value="Atacante" />
            </Picker>
            <Button
                title="Salvar Jogador"
                onPress={salvarJogador}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    picker: {
        height: 50,
        marginBottom: 20,
    }
});

export default CadastroJogador;
