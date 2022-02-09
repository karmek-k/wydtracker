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
        date: new Date('2022-02-01')
      },
      {
        spent: 300,
        date: new Date('2022-01-31')
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

  listThisMonth(): Expense[] {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    return this.expenses.filter(e => e.date >= monthStart);
  }

  get sum(): number {
    return this.expenses.map(e => e.spent).reduce((a, b) => a + b);
  }
}

export const ExpenseContext = createContext<ExpenseProvider>(
  new ExpenseProvider(null)
);
