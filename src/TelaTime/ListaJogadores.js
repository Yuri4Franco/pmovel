import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function ListaJogadores({ route }) {
    const [jogadores, setJogadores] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        axios.get(`http://192.168.1.4:3000/jogadores/${id}`)
            .then(response => {
                setJogadores(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar jogadores', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogadores do Time</Text>
            <FlatList
                data={jogadores}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.nome} - {item.posicao}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    }
});

export default ListaJogadores;
