import { createContext } from 'react';

export type User = {
  name: string
}

type Context = {
  user: User,
  setUser?: (data: any) => void
}

export const UserContext = createContext<Context>({
  user: {
    name: 'Augusto',
  },
});