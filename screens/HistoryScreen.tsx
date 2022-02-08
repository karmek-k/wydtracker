import { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { ExpenseContext } from '../services/expense';

export default function HistoryScreen() {
  const expenses = useContext(ExpenseContext);

  return (
    <ScrollView>
      {expenses.list().map((expense, i) => (
        <View style={styles.expense} key={i}>
          <View>
            <Text style={styles.expenseSpent}>{expense.spent} zł</Text>
            <Text>{expense.name ?? 'Bez nazwy'}</Text>
          </View>
          <View>
            <Text style={styles.date}>{expense.date.toLocaleString()}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  expense: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  expenseSpent: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  date: {
    fontStyle: 'italic'
  }
});
