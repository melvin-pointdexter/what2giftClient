import react, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import Style from "../../utilis/AppStyle";

const Signup = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    return (
        <View style={Style.container}>
            <Text style={Style.title}>Sign up</Text>
            <TextInput placeholder="Email" keyboardType="email-address" style={Style.txtInput}/>
            <TextInput placeholder="Password" style={Style.txtInput} secureTextEntry={true} />
            <TextInput placeholder="First Name" style={Style.txtInput} />
            <TextInput placeholder="Last Name" style={Style.txtInput} />
            <TouchableOpacity style={Style.button} onPress={() => {props.navigation.navigate("verify")}}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Signup;