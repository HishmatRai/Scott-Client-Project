import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Welcome,
  Welcome2,
  Welcome3,
  SignUp,
  LogIn,
  ForgotPassword,
  Setting,
  Search,
  Notifications,
  Profile,
  Home,
  Message,
  PostDetail,
  Profile6,
  CreatePost,
  EditeProfile,
  AddLocation,
  MessageDetails

} from "./../screens/index";
import Drawer from './Drawer'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome2"
          component={Welcome2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome3"
          component={Welcome3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Drawer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile6"
          component={Profile6}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditeProfile"
          component={EditeProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddLocation"
          component={AddLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageDetails"
          component={MessageDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
