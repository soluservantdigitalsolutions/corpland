import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home/Home";
import { COLORS } from "../Utils/color";
import Icon from "react-native-vector-icons/Ionicons";
import Sell from "../pages/Sell/Sell";
import Messages from "../pages/Messages/Messages";
import Profile from "../pages/Profile/Profile";
import Wishlist from "../pages/Wishlist/Wishlist";


const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: COLORS.PRIMARY }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="star"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="add-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="chatbubble-ellipses"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="person"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
