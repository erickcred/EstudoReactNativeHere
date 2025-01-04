import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ name }</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        {/* <Text style={styles.buttonText}>-</Text> */}
        {/* <AntDesign name="minus" size={32} color="green" /> */}
        <Ionicons name="trash" size={32} color="white" />
      </TouchableOpacity>
    </View>
  )
}