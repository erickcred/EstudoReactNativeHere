import React, { useState } from "react";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const [ participant, setParticipant ] = useState('');
  const [ participants, setParticipants] = useState<string[]>([])


  function handleParticipantAdd() {
    if (participants.includes(participant)) {
      return Alert.alert(`Participante existe (${participant})`, 'Já existe um participante na lista com esse nome!');
    }

    if (participant === '') {
      return Alert.alert('Erro!', 'Deve ser informado o nome do participante', );
    }

    setParticipants(prevState => [...prevState, participant]);
    setParticipant('');
  }

  function handleParticipantRemove(name: string) {
    if (participants.includes(name)) {
      return Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => {
            if (participants.length > 1) {
              setParticipants(participants.filter(item => item == name))
            } else {
              setParticipants([])
            }
            Alert.alert('Deletado!')
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ]);
    }
    console.log(`Removendo participante`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipant}
          value={participant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Niguém chegou no evento ainda? Adicione participantes a sua lista de prescença.
          </Text>
        )}
      />

      {/* <ScrollView
        showsVerticalScrollIndicator={false}
      >
      {
        participants.map(item => 
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )
      }
      </ScrollView> */}
    </View>
  )
}