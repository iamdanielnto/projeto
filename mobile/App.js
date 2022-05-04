import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Pagina = createNativeStackNavigator ();

import Home from "./View/Home"
import Login from "./View/Login"
import Produto from "./View/Produto"

export default function App() {
  return (
    <NavigationContainer>

      <Pagina.Navigator initialRouteName="Home">

        <Pagina.Screen name="Home"component={Home}/>
        <Pagina.Screen name="Login"component={Login}/>
        <Pagina.Screen name="Produto"component={Produto} options={ {title: "Cadastrar"} }/>


      </Pagina.Navigator>


    </NavigationContainer>
    
  );
}

