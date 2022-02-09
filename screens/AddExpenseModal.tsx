import { useContext, useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { ExpenseContext } from '../services/expense';
import { RootStackScreenProps } from '../types';

export default function AddExpenseModal({
  navigation
}: RootStackScreenProps<'AddExpenseModal'>) {
  const [name, setName] = useState<string>('');
  const [cost, setCost] = useState<string>('0');

  const expenses = useContext(ExpenseContext);

  function handlePress() {
    const nameVal = name !== '' ? name : undefined;
    const costVal = Number.parseFloat(
      cost.replace(',', '.').replace(/[^0-9.]/g, '')
    );

    if (!costVal || costVal === 0) {
      return;
    }

    try {
      expenses.add({
        name: nameVal,
        spent: costVal,
        date: new Date()
      });
    } catch (err) {
      console.log(`bad data! name: ${name}, cost: ${cost}`);
      return;
    }

    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Nazwa wydatku</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.inputLabel}>Koszt (zł)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cost.toString()}
        onChangeText={setCost}
      />

      <Button title="Dodaj wydatek" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputLabel: {
    fontSize: 30
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    fontSize: 20,
    padding: 15,
    borderRadius: 10
  }
});
