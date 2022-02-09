import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { ExpenseContext } from '../services/expense';
import { RootTabScreenProps } from '../types';

export default function CurrentMonthScreen({
  navigation
}: RootTabScreenProps<'CurrentMonth'>) {
  const expenses = useContext(ExpenseContext);
  const [weekSum, setWeekSum] = useState<number>(0);

  useEffect(() => {
    setWeekSum(
      expenses
        .listThisMonth()
        .map(e => e.spent)
        .reduce((a, b) => a + b)
    );
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twoje wydatki w tym miesiącu</Text>
      <Text style={styles.money}>{weekSum} zł</Text>
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
