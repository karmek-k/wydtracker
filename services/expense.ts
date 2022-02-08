import { createContext } from 'react';
import { SQLiteDatabase } from 'react-native-sqlite-storage';

export interface Expense {
  name?: string;
  spent: number;
  date: Date;
}

export class ExpenseProvider {
  private expenses: Expense[];

  constructor(db: SQLiteDatabase | null) {
    this.expenses = [
      {
        name: 'Groceries',
        spent: 50,
        date: new Date()
      },
      {
        spent: 300,
        date: new Date()
      },
      {
        name: 'Gift',
        spent: 150,
        date: new Date()
      }
    ];
  }

  add(expense: Expense) {
    this.expenses.push(expense);
  }

  list(): Expense[] {
    return this.expenses;
  }

  get sum(): number {
    return this.expenses.map(e => e.spent).reduce((a, b) => a + b);
  }
}

export const ExpenseContext = createContext<ExpenseProvider>(
  new ExpenseProvider(null)
);
