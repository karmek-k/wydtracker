import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Expense } from '../services/expense';

interface Props {
  expense: Expense;
}

export default function ExpenseHistoryItem({ expense }: Props) {
  return (
    <View style={styles.expense}>
      <View>
        <Text style={styles.expenseSpent}>{expense.spent} zł</Text>
        <Text>{expense.name ?? 'Bez nazwy'}</Text>
      </View>
      <View>
        <Text style={styles.date}>{expense.date.toLocaleString()}</Text>
      </View>
    </View>
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
