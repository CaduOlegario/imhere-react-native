import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type Props = {
  name: string
  onRemove: (name: string) => void
}

export const Participant: React.FC<Props> = ({ name, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
