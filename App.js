import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [eneteredText, settext] = useState("")
  const [list, setlist] = useState([])
  const handleTextChange = (eneteredText) => {
    settext(eneteredText)
  }
  const handlelistadd = () => {
    setlist = (list) => {
      [eneteredText, ...list]
    }
  }
  return (
    <View>
      <View>
        <TextInput style={styles.input} placeholder=" ADD COURSE GOALS" onChange={handleTextChange} />
        <Button title="ADD GOAL" />

      </View>
      <View>
        <Text>{list.map((goal) => { console.log(goal) })}</Text>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  input: {
    paddingTop: 50

  }
});
