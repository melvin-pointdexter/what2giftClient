import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import Style from "../../utilis/AppStyle";

const Dashboard = (props) => {
    return(
        <View style={Style.container}>
            <Text>Dashboard</Text>
            <Button onPress={() => {props.navigation.navigate("test")}} title="Go to test"/>
        </View>
    );
}

export default Dashboard;