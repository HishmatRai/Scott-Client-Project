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
  Image
} from "react-native";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Signup = (props) => {
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

      {/* ==================================> ** STATUS BAR ** <================================== */}
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />

      {/* ==================================> ** BODY ** <================================== */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._main}>

          {/* ==================================> ** LOGO ** <================================== */}
          <View style={styles._logo_main}>
            <Image
              source={require("./../../images/logo.png")}
              style={styles._logo}
            />
            <Text style={styles._heading}>Create a new account</Text>
          </View>
          <View style={{ marginTop: 20 }}>

            {/* ==================================> ** USER NAME ** <================================== */}
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="Choose a username"
                  placeholderTextColor="#C1C0C8"
                />
              </View>
            </View>

            {/* ==================================> ** EMAIL ** <================================== */}
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="Email"
                  placeholderTextColor="#C1C0C8"
                />
              </View>
            </View>

            {/* ==================================> ** PASSWORD ** <================================== */}
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#C1C0C8"
                />
              </View>
            </View>

            {/* ==================================> ** RE-ENTER PASSWORD ** <================================== */}
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="Re-enter Password"
                  secureTextEntry={true}
                  placeholderTextColor="#C1C0C8"
                />
              </View>
            </View>
          </View>

          {/* ==================================> ** SIGN UP ** <================================== */}
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Home")}>
            <Text style={styles._button_txt}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles._already_member}>

            {/* ==================================> ** ALREADY MEMBER ** <================================== */}
            <Text style={styles._already_member_text}>
              Already a member?
            </Text>

            {/* ==================================> ** SIGN IN ** <================================== */}
            <TouchableOpacity onPress={() => props.navigation.navigate("LogIn")}>
              <Text style={styles._signin_btn_text}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 20 }}></View>
        </View>
      </ScrollView>
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
  _header_main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 80,
  },
  _header_text: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
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
  _email_icons_view: {
    // backgroundColor: "red",
    width: "15%",
  },
  _email_input_view: {
    width: "100%",
  },
  _input: {
    color: "#C1C0C8",
    fontSize: 14,
    letterSpacing: 1

  },
  _forgot_btn_text: {
    letterSpacing: 1,
    color: "#33cc66",
  },
  button: {
    backgroundColor: "#33cc66",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
  _button_txt: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    letterSpacing: 2,
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
  _term_condition: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30
  },
  _agree_text: {
    color: "gray",
    marginLeft: 10,
    marginRight: 10,
  },
  _already_member: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "flex-end",
  },
  _already_member_text: {
    color: "#6F8BA4",
    marginRight: 4,
    fontSize: 12
  },
  _signin_btn_text: {
    letterSpacing: 1,
    color: "#33cc66",
    fontWeight: "bold",
    fontSize: 12
  },
  _logo_main: {
    alignItems: "center",
    marginTop: 40,
  },
  _logo: {
    width: 167,
    height: 201,
  },
  _heading: {
    fontSize: 14,
    color: "black",
    letterSpacing: 1,
  },
});

export default Signup;
