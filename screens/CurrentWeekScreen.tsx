import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function CurrentWeekScreen({
  navigation
}: RootTabScreenProps<'CurrentWeek'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twoje wydatki w tym tygodniu</Text>
      <Text style={styles.money}>1234,00 zł</Text>
      <Button title="Dodaj nowy wydatek" onPress={() => {}} />
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
