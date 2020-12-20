import { createStackNavigator } from "react-navigation-stack";
import Signup from "../screens/signup";
import Header from "../shared/header";
import React from "react";

const screens = {
    Signup: {
        screen: Signup,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    }
}
const SignUpStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#0998f9" }
    }
});
export default SignUpStack;