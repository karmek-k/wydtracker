import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { MoneyContext, MoneyProvider } from './services/money';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <MoneyContext.Provider value={new MoneyProvider()}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </MoneyContext.Provider>
      </SafeAreaProvider>
    );
  }
}
