import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Text, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextBox from 'react-native-password-eye';
import { color } from "react-native-reanimated";
import Login from "./login";
import LoginStack from "../routes/loginStack";




export default function Signup() {
    const [onFocus, setOnFocus] = useState(false);
const customStyle = onFocus ? style.inputfocus : style.input;
    return (
        <>
            <View style={style.imagebox}>
                <ImageBackground source={require("../assets/logoo.png")} height="50px" style={style.image}>
                </ImageBackground>
            </View>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss(setOnFocus(false));
            }}>
                <View style={style.card}>
                    <Text style={style.signintext}>Create Account</Text>
                    <Text style={style.label}>
                        Full Name
                     </Text>
                    <TextInput selectionColor="#0998f9" onFocus={() => setOnFocus(true)} style={customStyle}
                        placeholder="Enter Name..."
                    />
                    <Text style={style.label}>
                        Phone Number
                     </Text>
                    <TextInput selectionColor="#0998f9"  type="telephoneNumber" autoCompleteType="tel" keyboardType="number-pad" onFocus={() => setOnFocus(true)} style={customStyle}
                        placeholder="Enter Phone Number..."
                    />
                    <Text style={style.label}>
                        Email Address
                     </Text>
                    <TextInput selectionColor="#0998f9" autoCompleteType="email" onFocus={() => setOnFocus(true)} style={customStyle}
                        placeholder="Enter Email..."
                    />

                    <Text style={style.label}>
                        Password
                </Text>
                    <TextBox secureTextEntry onFocus={() => setOnFocus(true)} onChangeText={(text) => console.log('onChangeText: ', text)} selectionColor="#0998f9" inputStyle={[{ color: "black", height: 50 }]} containerStyles={[customStyle]} />
                    <TouchableOpacity style={style.button}><Text style={{ color: "white" }}>Sign Up</Text></TouchableOpacity>
                    <View style={style.signuptext}><Text style={{ fontSize: 10 }}>I'm already a member. </Text>
                    <TouchableOpacity onPress={()=>{<LoginStack/>}}><Text style={{ color: "#0998f9", fontSize: 10,fontWeight:"bold" }}>Sign In</Text></TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

const style = StyleSheet.create({


    signuptext: {
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        marginTop: 25,
        paddingTop:20,
        marginBottom: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0998f9",
        padding: 10,
        borderRadius: 7,
        marginTop:15,
    },
    forgetpassword: {
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 1,
        textAlign: "right",
        fontSize: 10,
        alignContent: "flex-end",
        display: "flex",
    },
    label: {
        flexDirection: 'row',
        fontSize: 10,
        color: "#6c7881",
        paddingLeft: 9,



    },
    inputfocus: {
        borderWidth: 1,
        borderColor: "#0998f9",
        borderRadius: 7,
        paddingHorizontal: 8,
        paddingVertical: 9,
        backgroundColor: "white",
        color: "black",
        height: 45,
    },
    input: {
        marginTop: 0,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: "white",
        borderRadius: 7,
        borderColor: "white",
        color: "black",
        fontFamily: "arial",
        height: 50,
        flex: 1,
        flexDirection: "row",
    },
    imagebox: {
        marginTop: 10,
        paddingLeft: 30,
        justifyContent: "center",
        height: 120,
        width: 330,
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        flex: 1,
    },
    card: {
        backgroundColor: "#E7EDEF",
        borderColor: "#E7EDEF",
        borderWidth: 0.5,
        borderRadius: 30,
        flex: 1,
        overflow: "scroll",
        padding: 30,
    },
    signintext: {
        justifyContent: "center",
        paddingBottom: 20,
        fontWeight: "bold",
        fontSize: 22,
        fontFamily: "Arial",
        paddingTop: 20,
        textAlign: "center",
        flex: 1,
        flexDirection: "row",
    }

})