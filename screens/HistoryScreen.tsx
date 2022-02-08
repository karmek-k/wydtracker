import { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ExpenseHistoryItem from '../components/ExpenseHistoryItem';

import { ExpenseContext } from '../services/expense';

export default function HistoryScreen() {
  const expenses = useContext(ExpenseContext);

  return (
    <ScrollView>
      {expenses.list().map((expense, i) => (
        <ExpenseHistoryItem expense={expense} key={i} />
      ))}
    </ScrollView>
  );
}
