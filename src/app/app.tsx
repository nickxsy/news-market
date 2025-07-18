import { AppLoader } from './app-loader';
import { AppProvider } from './app-provider';
import { AppRouter } from './app-router';
import './index.css';

export function App() {
  return (
    <AppProvider>
      <AppLoader />
      <AppRouter />
    </AppProvider>
  );
}
