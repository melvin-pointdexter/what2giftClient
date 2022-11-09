import react, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import Style from "../../utilis/AppStyle";

const Verify = () => {

    const [passcode, setPasscode] = useState(0);

    return (
        <View style={Style.container}>
            <Text style={Style.title}>Verify</Text>
            <TextInput placeholder="Passcode" keyboardType="decimal-pad" style={Style.txtInput}/>
            <TouchableOpacity style={Style.button}>
                <Text>Verify Account</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Verify;