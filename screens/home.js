import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform, Image, Alert } from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import { globalStyle } from "../styles/global.js";
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from "react-native-permissions";
import { createIconSetFromFontello } from 'react-native-vector-icons';
export default function Home({ navigation }) {
    useEffect(()=>{
        requestLocationPermission();
    })
    const [initialPosition, setInitialPosition] = useState({});

    const locateCurrentPosition = async () => {
        requestLocationPermission();
        Geolocation.getCurrentPosition(
            position => {
                //  console.log(JSON.stringify(position));
                let region = {
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude, latitudeDelta: 0.09, longitudeDelta: 0.035
                }
                setInitialPosition({ region: region });
                //  console.log("mus",region)
            }, error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
          )
    }

const requestLocationPermission = async () => {
    if (Platform.OS === "ios") {
        var response = request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        if (response === 'granted') {
            locateCurrentPosition();
        }
        else {
            Alert.alert("LOCATION ACCESS", "PLEASE GIVE ACCESS TO THE LOCATION", [{
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Ok",
            },

            ]);
        }
    }
    else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }   
    }


}

const [coordinates, setCoordinates] = useState([
    { name: 'Burger', latitude: 37.8025259, longitude: -122.4351431 },
    { name: 'Pizza', latitude: 37.7946386, longitude: -122.421646 },
    { name: 'Soup', latitude: 37.7665248, longitude: -122.4165628 },
    { name: 'Sushi', latitude: 37.7834153, longitude: -122.4527787 },
    { name: 'Curry', latitude: 37.7948105, longitude: -122.4596065 },
]
)
return (

    <MapView provider={PROVIDER_GOOGLE} style={style.map} showsUserLocation={true} initialRegion={initialPosition.region}>
        <Circle center={{ longitude: 67.0984, latitude: 24.9132 }}
            fillColor={'rgba(54,132,235,0.5)'} strokeColor={"white"}
            radius={500}
        />
        <Marker draggable coordinate={{ latitude: 24.9132, longitude: 67.0984 }} >
            <Callout
                onPress={() =>
                    Alert.alert('Welcome to Xord',
                        "It is the place for blockchain developers",
                        [{
                            text: "Cancel",
                            style: "cancel"
                        },
                        {
                            text: "Ok",
                        },

                        ]
                    )}
            >
                <Text>Xord</Text>

            </Callout>
        </Marker>
    </MapView>
)


}
// export default function Home({ navigation }) {
//     const pressHandler = () => {
//         navigation.navigate("ReviewDetails");
//     }
//     const [reviews, setReviews] = useState([
//         { title: "Breath of fresh air", rating: 5, body: "loemnc", key: "1" },
//         { title: "Zieda,of fresh air", rating: 3, body: "loemnc", key: "2" },
//         { title: "Zieda,of fresh air", rating: 4, body: "loemnc", key: "3" },

//     ])
//     return (
//         <View style={globalStyle.container}>
//             <FlatList data={reviews} renderItem={({ item }) => (
//                 <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
//                     <Text style={globalStyle.title}>
//                         {item.title}
//                     </Text>
//                 </TouchableOpacity>
//             )}    />
//             {/* <Button title="go to review details" onPress={pressHandler}></Button> */}
//         </View>
//     )
// }
const style = StyleSheet.create({
    map:
    {
        height: "100%"
    }
})
