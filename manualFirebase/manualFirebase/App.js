// Importações para a navegação
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importações das telas
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'

// Criação de um navegador
const Stack = createNativeStackNavigator()

// Função para carregas as telas na navegação
export default function App() {
  // Retorna os elementos do App
  return(
    // Cria um container para a tela, como se fosse uma <View>
    <NavigationContainer>
      {/* Outro container para armazenar as telas */}
      <Stack.Navigator>
      {/* Telas */}
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
