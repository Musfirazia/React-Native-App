import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation = { navigation } />,
            }
        }
    },
ReviewDetails: {
    screen: ReviewDetails,
        navigationOptions: {
        title: 'Review Details'
    }
}
    
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#0998f9" }
    }
});
export default HomeStack;