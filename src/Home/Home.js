import React, { useEffect, useState } from "react";
import { Pressable, Alert, SafeAreaView, ScrollView, Text, Button } from "react-native";
import ItemLista from "../ItemLista/ItemLista";
import axios from 'axios';

function Home({ navigation }) {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await axios.get('http://192.168.1.4:3000/times');
        setTimes(response.data);
      } catch (error) {
        console.error('Erro ao buscar times:', error);
      }
    };

    fetchTimes();
  }, []);

  const confirmarDeletar = async (id) => {
    Alert.alert(
      'Deletar time',
      'Você realmente quer deletar?', [{
        text: 'Sim',
        onPress: async () => {
          try {
            const response = await axios.delete(`http://192.168.1.4:3000/times/${id}`);
            if (response.status === 200) {
              setTimes(times.filter(time => time.id !== id));
              alert('Time deletado com sucesso!');
            }
          } catch (error) {
            console.error('Erro ao deletar time:', error);
            alert('Erro ao deletar time');
          }
        },
        style: 'destructive'
      },
      {
        text: 'Não',
        onPress: () => console.log('Cancelado'),
        style: 'cancel'
      }]
    );
  };

  return (
    <SafeAreaView>
      <Text>Lista de times:</Text>
      <ScrollView>
        {times.map((time) => (
          <Pressable key={time.id} onPress={() => {
            navigation.navigate('TelaTime', {
              id: time.id,
              nome: time.nome,
              img: `http://192.168.1.4:3000/imagens/${time.imagem}`
            })
          }}>
            <ItemLista
              nome={time.nome}
              img={`http://192.168.1.4:3000/imagens/${time.imagem}`}
            />
            <Button title="Deletar" onPress={() => confirmarDeletar(time.id)} color="red" />
            <Button title="Atualizar" onPress={() => navigation.navigate('AtualizarTime', { timeId: time.id })} color="blue" />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
