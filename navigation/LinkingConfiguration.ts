/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          CurrentWeek: {
            screens: {
              CurrentWeekScreen: 'currentWeek'
            }
          },
          History: {
            screens: {
              HistoryScreen: 'history'
            }
          }
        }
      },
      AddExpenseModal: 'addExpenseModal',
      NotFound: '*'
    }
  }
};

export default linking;
