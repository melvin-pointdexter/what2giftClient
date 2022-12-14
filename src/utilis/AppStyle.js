import {StyleSheet} from "react-native";
import Colors from "./AppColors";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.bg,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize: 30,
        marginBottom:20,
    },
    txtInput:{
        backgroundColor: Colors.white,
        width: "80%",
        marginBottom:15,
        padding:5,
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        backgroundColor: Colors.lavander,
        paddingHorizontal: 30,
        paddingVertical:15,
        marginBottom:15,
        justifyContent:"center",
        alignItems:"center",
    },
    slide:{
        width: "80%",
    },
});