import { createContext } from 'react';

export class MoneyProvider {}

export const MoneyContext = createContext<MoneyProvider>(new MoneyProvider());
