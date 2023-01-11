import React from 'react';
import {View, Text} from 'react-native';
import Style from "../../utilis/AppStyle";

import {useDispatch} from "react-redux";
import firebase from "../../utilis/firebaseConfig";

const Profile = () => {
    
    return(
        <View style={Style.container}>
            <Text>Profile</Text>
        </View>
    );
}

export default Profile;