import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'

export function Home() {

  function handleparticipantAdd() {
    console.log('Voce clicou no botão de adicionar')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>11 de Agosto, sexta-feira, 2023</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#b8b8b8"
        keyboardAppearance="dark"
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleparticipantAdd}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}