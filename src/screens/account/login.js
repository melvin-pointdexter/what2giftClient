import react, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import Style from "../../utilis/AppStyle";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <View style={Style.container}>
            <Text style={Style.title}>Log In</Text>
            <TextInput placeholder="Email" keyboardType="email-address" style={Style.txtInput}/>
            <TextInput placeholder="Password" style={Style.txtInput} secureTextEntry={true} />
            <TouchableOpacity style={Style.button}>
                <Text>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.navigation.navigate("signup")}}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;