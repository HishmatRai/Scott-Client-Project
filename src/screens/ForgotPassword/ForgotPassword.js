import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo, Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const ForgotPassword = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#33CC66"
        translucent={true}
      />
      <View style={styles._main}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingTop:20 }}>
          <TouchableOpacity
            style={styles._back_icon_btn}
            onPress={() => props.navigation.goBack()}
          >
            <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles._heading}>Forgot Password</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 70 }}>
          <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="email"
                  placeholderTextColor="#C1C0C8"
                />
              </View>
            </View>
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="new password"
                  secureTextEntry={true}
                  placeholderTextColor="#C1C0C8"
                />
              </View>
            </View>
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="confirm password"
                  secureTextEntry={true}
                  placeholderTextColor="#C1C0C8"
                />
              </View>
            </View>
          </View>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("SignUp")}
          >
            <Text style={styles._button_txt}>Send</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 50 }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _main: {
    margin: 20,
  },
  _input_main: {
    borderRadius: 5,
    backgroundColor: "#F2F5F8",
    // borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  _email_input_view: {
    // backgroundColor: "green",
    width: "100%",
  },
  _input: {
    color: "#6F8BA4",
  },
  _forgot_btn: {
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
  _forgot_btn_text: {
    letterSpacing: 1,
    color: "#33CC66",
  },
  button: {
    backgroundColor: "#33cc66",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
  },
  _button_txt: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 12,
    letterSpacing: 1,
  },
  _or: {
    textAlign: "center",
    color: "#777777",
    // fontWeight:"bold",
    fontSize: 25,
    marginTop: 10,
  },
  _fb_button: {
    backgroundColor: "#2672cb",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  _fb_button_txt: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    letterSpacing: 0.5,
    paddingRight: 10,
  },
  _remember_main: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  _check: {
    backgroundColor: "white",
    elevation: 1,
    width: 20,
    height: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "#DCDBFF",
    borderWidth: 1,
  },
  _remember_text: {
    fontSize: 14,
    color: "#6F8BA4",
    marginLeft: 10,
  },
  _heading: {
    marginLeft: "30%",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default ForgotPassword;
