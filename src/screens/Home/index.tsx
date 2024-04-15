import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  // ScrollView,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const [valueInput, setValueInput] = useState<string>('')
  const [participants, setParticipants] = useState<string[]>([
    'Rodrigo',
    'Diego',
    'Vinicius',
    'Cadu',
    'Lucas',
    'Rafael',
    'Gustavo',
    'Matheus',
    'Gabriel',
    'Felipe',
    'Guilherme',
    'João',
    'Pedro',
    'Ricardo',
    'Marcelo',
    'Carlos',
    'Eduardo',
    'Fernando',
    'Henrique',
    'Igor',
  ])

  const handleParticipantAdd = () => {
    if (participants.includes(valueInput)) {
      Alert.alert(
        'Participante existe',
        'Já existe um participante com esse nome.',
      )
      return
    }
    if (valueInput) {
      setParticipants([...participants, valueInput])
      setValueInput('')
    }
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover participante', `Deseja remover ${name}?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () => {
          setParticipants(
            participants.filter((participant) => participant !== name),
          )
        },
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={valueInput}
          onChangeText={setValueInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
          disabled={valueInput === ''}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantRemove} />
        )}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
      {/* <ScrollView style={styles.participants}>
        {participants?.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView> */}
    </View>
  )
}
