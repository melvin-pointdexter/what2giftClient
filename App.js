import react, {useState, useEffect, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator,AccountStack } from "./src/navigation";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, useSelector} from "react-redux";
import ReduxThunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore} from "redux";

import firebase from "./src/utilis/firebaseConfig";

import reducers from "./store/reducers";
const rootReducer = combineReducers({
  appReducer : reducers
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {

  const [isLogin,setIsLogin] = useState(false);
  const [token, setToken] = useState('');

  const getDataFromAsync = useCallback(async () => {
    const dataFromAsync = await AsyncStorage.getItem('Account');
    if (dataFromAsync != null) {
      const data = JSON.parse(dataFromAsync);
      setToken(data.token);
      setIsLogin(true);
    }
  }, [setToken])

  useEffect(() => {
    getDataFromAsync();
  }, [getDataFromAsync])

  console.log(token);

  const [isAuth, setIsAuth] = useState(false);
  if (firebase.apps.length){
    firebase.auth().onAuthStateChanged((user) => {
      setIsAuth(!!user)
    });
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          isAuth ? (<TabsNavigator/>) : (<AccountStack/>)
        }
      </NavigationContainer>
    </Provider>
  );
}

export default App;