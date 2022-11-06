import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator } from "./src/navigation"

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigator/>
    </NavigationContainer>
  );
}

export default App;