import { Provider } from 'react-redux';

import { store } from '@/shared/lib';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
