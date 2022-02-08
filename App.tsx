import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ExpenseContext, ExpenseProvider } from './services/expense';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pl';

SQLite.enablePromise(true);

// dayjs().locale('pl');
dayjs.extend(relativeTime);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ExpenseContext.Provider value={new ExpenseProvider(null)}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ExpenseContext.Provider>
      </SafeAreaProvider>
    );
  }
}
