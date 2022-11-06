//IMPORT NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//IMPORT ICONS
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//IMPORT SCREENS
import Dashboard from "../screens/dashboard";
import Test from "../screens/dashboard/test";
import Gifts from "../screens/gifts";
import Profile from "../screens/profile";
import Favorites from "../screens/favorites";

//CREATE STACK
const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen name="dashboard" component={Dashboard}/>
            <DashboardStackNavigator.Screen name="Test" component={Test}/>
        </DashboardStackNavigator.Navigator>
    );
};

//CREATE TABS
const appTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <appTab.Navigator>
            <appTab.Screen name="DashboardTab" component={DashboardStack} options={{tabBarLabel:"Dashboard",tabBarIcon: () => (<MaterialCommunityIcons name="view-grid" size={28}/>)}}/>
            <appTab.Screen name="GiftsTab" component={Gifts} options={{tabBarLabel:"Gifts",tabBarIcon: () => (<MaterialCommunityIcons name="gift" size={28}/>)}}/>
            <appTab.Screen name="ProfileTab" component={Profile} options={{tabBarLabel:"Profile",tabBarIcon: () => (<MaterialCommunityIcons name="face-man-profile" size={28}/>)}}/>
            <appTab.Screen name="FavoritesTab" component={Favorites} options={{tabBarLabel:"Favorites",tabBarIcon: () => (<MaterialCommunityIcons name="star" size={28}/>)}}/>
        </appTab.Navigator>
    );
}
