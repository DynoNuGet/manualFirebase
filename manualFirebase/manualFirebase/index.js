// Importação de um sistema para garantir que o aplicativo rode em qualquer sistema (Expo Go, web, ou no celular)
import { registerRootComponent } from 'expo';

// Importação do aplicativo
import App from './App';

// Roda o código do aplicativo
registerRootComponent(App);
