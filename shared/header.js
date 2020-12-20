import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation}) {
    const openMenu =()=>{
navigation.openDrawer();
    }
   
    return (
        <View style={style.header}>
           <Icon style={style.icon} name="menu" size={30} color="black" onPress={openMenu}/>
            <View>
           
                <Text style={style.headerText}>Review App</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    header: {

        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    },
    headerText: {
        fontWeight: "bold",
        justifyContent: "center",
        color: "black",
        fontSize: 16,
        letterSpacing: 1,
    },
    icon:{
        position:"absolute",
left:6,
    }
})