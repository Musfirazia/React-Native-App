import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/login";
import Header from "../shared/header";
import React from "react";

const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    }
}
const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#0998f9" }
    }
});
export default LoginStack;