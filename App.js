import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clear = () => {
    setData([]);
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      </View>
      <View style={styles.mid}>
        <Button onPress={add} title="Add" />
        <Button onPress={clear} title="Clear" />
      </View>
      <View style={styles.bot}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  top: {
    flex: 8,
    justifyContent: 'flex-end'
  },
  mid: {
    flex: 1,
    flexDirection: 'row'
  },
  bot: {
    flex: 10,
    justifyContent: 'flex-start'
  },
});