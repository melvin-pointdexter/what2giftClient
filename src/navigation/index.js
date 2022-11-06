//IMPORT NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//IMPORT ICONS
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//IMPORT SCREENS
import Dashboard from "../screens/dashboard";
import Gifts from "../screens/gifts";
import Profile from "../screens/profile";
import Favorites from "../screens/favorites";

//CREATE TABS
const appTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <appTab.Navigator>
            <appTab.Screen name="DashboardTab" component={Dashboard} options={{tabBarLabel:"Dashboard",tabBarIcon: () => (<MaterialCommunityIcons name="view-grid" size={28}/>)}}/>
        </appTab.Navigator>
    );
}
