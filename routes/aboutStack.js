import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const screens = {
    Home: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    }
}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#C5E0E7" }
    }
});
export default AboutStack;