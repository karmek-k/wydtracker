import { useContext } from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { ExpenseContext } from '../services/expense';
import { RootTabScreenProps } from '../types';

export default function CurrentWeekScreen({
  navigation
}: RootTabScreenProps<'CurrentWeek'>) {
  const expenses = useContext(ExpenseContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twoje wydatki w tym tygodniu</Text>
      <Text style={styles.money}>{expenses.sum} zł</Text>
      <Button
        title="Dodaj nowy wydatek"
        onPress={() => navigation.navigate('AddExpenseModal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  money: {
    fontSize: 40,
    paddingVertical: 15
  }
});
