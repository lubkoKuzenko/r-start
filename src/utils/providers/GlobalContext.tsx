import React, { createContext, useReducer } from 'react';
import { LanguageEnum, LocalStorageKeysEnum } from '../../enums';

type Props = {
  children: React.ReactNode;
};

interface Context {
  language: LanguageEnum;
  property_first: number;
  property_second: string;
  isLogedIn: boolean;
  user: null | { name: { firstname: string; lastname: string } };
}

const language = localStorage.getItem(LocalStorageKeysEnum.LANGUAGE);
const initialContext: Context = {
  language: language !== null ? JSON.parse(language) : LanguageEnum.EN,
  property_first: 0,
  property_second: 'initial value',
  isLogedIn: true,
  user: null
};

type Action =
  | { type: 'UPDATE_PROPERTY_FIRST'; payload: number }
  | { type: 'UPDATE_PROPERTY_SECOND'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: LanguageEnum }
  | { type: 'SET_LOGIN'; payload: boolean }
  | { type: 'SET_USER'; payload: { name: { firstname: string; lastname: string } } | null };

function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    case 'UPDATE_PROPERTY_FIRST':
      return { ...state, property_first: action.payload };
    case 'UPDATE_PROPERTY_SECOND':
      return { ...state, property_second: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_LOGIN':
      return { ...state, isLogedIn: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      throw new Error('Unhandled action type.');
  }
}

export const GlobalContext = createContext<{
  state: typeof initialContext;
  dispatch: (action: Action) => void;
}>({ state: initialContext, dispatch: () => {} });

const GlobalContextProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
