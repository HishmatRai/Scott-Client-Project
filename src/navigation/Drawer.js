import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "./SideMenu";
import { createStackNavigator } from "@react-navigation/stack";
import Notifications from "./../screens/Notifications/Notifications";
import Home from "./../screens/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Message from "./../screens/Message/Message";
import Profile from "./../screens/Profile/Profile";
import { Feather, MaterialIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function TanNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? (
              <Feather name="home" size={30} color="#33CC66" />
            ) : (
              <Feather name="home" size={30} color="#989BA5" />
            );
          } else if (route.name === "Message") {
            iconName = focused ? (
              <Feather name="message-square" size={30} color="#33CC66" />
            ) : (
              <Feather name="message-square" size={30} color="#989BA5" />
            );
          } else if (route.name === "Notification") {
            iconName = focused ? (
              <MaterialIcons
                name="notifications-none"
                size={30}
                color="#33CC66"
              />
            ) : (
              <MaterialIcons
                name="notifications-none"
                size={30}
                color="#989BA5"
              />
            );
          } else if (route.name === "Profile") {
            iconName = focused ? (
              <Feather name="user" size={30} color="#33CC66" />
            ) : (
              <Feather name="user" size={30} color="#989BA5" />
            );
          }

          // You can return any component that you like here!
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerStyle={{
        width: "75%",
        height: "100%",
        // marginTop: 100,
        backgroundColor: "#2F5E3E",
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Message"
        component={TanNavigation}
        style={{ color: "white" }}
      />
      {/* <Drawer.Screen name="Notifications" component={Notifications} /> */}
    </Drawer.Navigator>
  );
}
