import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import Style from "../../utilis/AppStyle";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/actions";
import * as Location from "expo-location";

const Dashboard = (props) => {

    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [location, setLocation]=useState(null);

    const getDataFromAsync = useCallback(async ()=> {
        const dataFromAsync = await AsyncStorage.getItem('Account');
        if(dataFromAsync != null){
            const data = JSON.parse(dataFromAsync);
            setToken(data.token);
        }
    },[setToken])
    useEffect(() => {
        getDataFromAsync();
    },[getDataFromAsync])

    useEffect(() => {
        (async () => {

          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);

          if(token && location){
              console.log(location);
            const action = actions.getOverview(token,location);
            try {
                dispatch(action);
                setIsLoading(false);
            } catch (error) {

            }
          }

        })();
      }, []);

    return(
        <View style={Style.container}>
            <Text>Dashboard</Text>
            <Button onPress={() => {dispatch(actions.logout())}} title="Log Out"/>
        </View>
    );
}

export default Dashboard;