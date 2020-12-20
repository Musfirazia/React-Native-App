import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import LoginStack from "./loginStack";
import SignUpStack from "./signupStack";
const rootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },
    Login: {
        screen: LoginStack,
    },
    SignUp: {
        screen: SignUpStack,
    }
})
export default createAppContainer(rootDrawerNavigator);