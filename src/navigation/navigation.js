import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Welcome,
  SignUp,
  LogIn,
  Setting,
  Search,
  Notifications,
  Profile,
  Home,
} from "./../screens/index";
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
