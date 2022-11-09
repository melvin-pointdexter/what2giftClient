import react, {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator,Alert} from "react-native";
import Style from "../../utilis/AppStyle";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect( () => {
        if (errorMsg){
            Alert.alert("Login",errorMsg);
        }
    }, [errorMsg]);

    const login = async() => {
        setIsLoading(true);
        if (email!="" && password!=""){
            try{
                const host = "10.100.8.13";     //"localhost"
                const url = "http://"+host+":9001/api/account/login";
                const response = await fetch(url,{
                    method: "post",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });
                const data = await response.json();
                if (data.status){
                    setErrorMsg(data.token);
                }
                else{
                    setErrorMsg(data.message);
                }
                setIsLoading(false);
            }
            catch (err){
                setIsLoading(false);
                setErrorMsg(err.message);
            }
        }
        else{
            setIsLoading(false);
            setErrorMsg("All fields required");
        }
    };

    return (
        <View style={Style.container}>
            <Text style={Style.title}>Log In</Text>
            <TextInput value={email} onChangeText={text => {setEmail(text)}} placeholder="Email" keyboardType="email-address" style={Style.txtInput}/>
            <TextInput value={password} onChangeText={text => {setPassword(text)}} placeholder="Password" style={Style.txtInput} secureTextEntry={true} />
            {
                isLoading ? (<ActivityIndicator color="#995555" size="large"/>) :  (<TouchableOpacity style={Style.button} onPress={login}>
                <Text>Log In</Text >
            </TouchableOpacity>)
            }
            <TouchableOpacity onPress={() => {props.navigation.navigate("signup")}}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

/*
<TouchableOpacity style={Style.button} onPress={login}>
                <Text>Log In</Text >
            </TouchableOpacity>
*/

export default Login;