import react, {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator,Alert} from "react-native";
import Style from "../../utilis/AppStyle";
import * as actions from "../../../store/actions";
import {useDispatch} from "react-redux";

import firebase from "../../utilis/firebaseConfig";

const Login = (props) => {

    const [loginView, setLoginView] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const dispatch = useDispatch();

    useEffect( () => {
        if (errorMsg){
            Alert.alert("Login",errorMsg);
        }
    }, [errorMsg]);

    const login = async() => {
        setIsLoading(true);
        if (email != "" && password!= ""){
            //const action = actions.login(email,password);
            try{
                //dispatch(action);
                const user = await firebase.auth().signInWithEmailAndPassword(email, password);
                setIsLoading(false);
            } catch (error){
                setIsLoading(false);
                setErrorMsg(error.message);
            }
        }else {
            setIsLoading(false);
            setErrorMsg("Email and password are required");
        }
        /*if (email!="" && password!=""){
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
        }*/
    };

    const signup = async() => {
        setIsLoading(true);
        if (email != "" && password!= ""){
            //const action = actions.login(email,password);
            try{
                const user = await firebase.auth().createUserWithEmailAndPassword(email,password);
                //dispatch(action);
                setIsLoading(false);
            } catch (error){
                setIsLoading(false);
                setErrorMsg(error.message);
            }
        }else {
            setIsLoading(false);
            setErrorMsg("Email and password are required");
        }
    };

    return (
        <View style={Style.container}>
            {
                loginView ? 
            (<View style={Style.fullContainer}>
                <Text style={Style.title}>Log In</Text>
                <TextInput value={email} onChangeText={text => {setEmail(text)}} placeholder="Email" keyboardType="email-address" style={Style.txtInput}/>
                <TextInput value={password} onChangeText={text => {setPassword(text)}} placeholder="Password" style={Style.txtInput} secureTextEntry={true} />
                {
                    isLoading ? (<ActivityIndicator color="#995555" size="large"/>) :  (<TouchableOpacity style={Style.button} onPress={login}>
                    <Text>Log In</Text >
                </TouchableOpacity>)
                }
                <TouchableOpacity onPress={() => {setLoginView(false)}}>
                    <Text>Don't have an account? Sign Up!</Text>
                </TouchableOpacity>
            </View>)
            :
            (<View style={Style.fullContainer}>
                <Text style={Style.title}>Sign Up</Text>
                <TextInput value={email} onChangeText={text => {setEmail(text)}} placeholder="Email" keyboardType="email-address" style={Style.txtInput}/>
                <TextInput value={password} onChangeText={text => {setPassword(text)}} placeholder="Password" style={Style.txtInput} secureTextEntry={true} />
                {
                    isLoading ? (<ActivityIndicator color="#995555" size="large"/>) :  (<TouchableOpacity style={Style.button} onPress={signup}>
                    <Text>Sign Up</Text >
                </TouchableOpacity>
                )
                }
                <TouchableOpacity onPress={() => {setLoginView(true)}}>
                    <Text>Have an account? Log In!</Text>
                </TouchableOpacity>
            </View>)
            }
        </View>
    );
};

/*
<TouchableOpacity style={Style.button} onPress={login}>
                <Text>Log In</Text >
            </TouchableOpacity>
*/

export default Login;