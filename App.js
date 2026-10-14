import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleAddTask = () => {
    if (inputText.trim() === '') return;


    console.log('Nová úloha:', inputText);

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: inputText }
    ]);

    setInputText('');
  };

  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Zadaj úlohu"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <Button title="ADD" onPress={handleAddTask} />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.bottomSection}>
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>UDALOSTI</Text>
          
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Text style={styles.taskItemText}>• {item.text}</Text>
              </View>
            )}
            style={{ width: '100%' }}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf6f6',
    paddingTop: 60,
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#90caf9',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#cb0000',
    backgroundColor: '#ffffff',
  },
  divider: {
    height: 2,
    backgroundColor: '#000000',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  bottomSection: {
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  taskContainer: {
    backgroundColor: '#e8f5e9',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    flex: 1,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#a5d6a7',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  taskItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  taskItemText: {
    fontSize: 16,
    color: '#1b5e20',
  },
});