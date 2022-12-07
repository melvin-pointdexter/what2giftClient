import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator,AccountStack } from "./src/navigation";

import { Provider} from "react-redux";
import ReduxThunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore} from "redux";

import reducers from "./store/reducers";
const rootReducer = combineReducers({
  appReducer : reducers
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {

  const [isLogin,setIsLogin] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          isLogin ? (<TabsNavigator/>) : (<AccountStack/>)
        }
      </NavigationContainer>
    </Provider>
  );
}

export default App;