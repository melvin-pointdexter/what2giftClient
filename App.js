import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator,AccountStack } from "./src/navigation"

const App = () => {

  const [isLogin,setIsLogin] = useState(false);
  return (
    <NavigationContainer>
      {
        isLogin ? (<TabsNavigator/>) : (<AccountStack/>)
      }
    </NavigationContainer>
  );
}

export default App;