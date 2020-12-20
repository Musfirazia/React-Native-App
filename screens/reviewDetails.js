import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import {globalStyle} from "../styles/global.js"

export default function ReviewDetails({navigation}) {
    const pressHandler=()=>{
        navigation.goBack();
    }
    return (
        <View style={globalStyle.container}>
            <Text>{navigation.getParam("title")}</Text>
            <Text>{navigation.getParam("rating")}</Text>
            <Text>{navigation.getParam("body")}</Text>

         {/* <Button title="Back to home screen" onPress={pressHandler}></Button> */}
        </View>
    )
}
