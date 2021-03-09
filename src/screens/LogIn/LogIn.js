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
import { Ionicons, Feather } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const LogIn = (props) => {
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

      <View style={styles._main}>
        {/* ==================================> ** HEADER ** <================================== */}
        <TouchableOpacity
          style={styles._back_icon_btn}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>

        {/* ==================================> ** BODY ** <================================== */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* ==================================> ** LOGO ** <================================== */}
          <View style={styles._logo_main}>
            <Image
              source={require("./../../images/logo.png")}
              style={styles._logo}
            />
            <Text style={styles._heading}>Login to existing account</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            {/* ==================================> ** EMAIL ** <================================== */}
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="email"
                  placeholderTextColor="#6F8BA4"
                />
              </View>
            </View>

            {/* ==================================> ** PASSWORD ** <================================== */}
            <View style={styles._input_main}>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="password"
                  secureTextEntry={true}
                  placeholderTextColor="#6F8BA4"
                />
              </View>
            </View>
          </View>

          {/* ==================================> ** FORGOT PASSWORD ** <================================== */}
          <View>
            <TouchableOpacity
              style={styles._forgot_btn}
              onPress={() => props.navigation.navigate("ForgotPassword")}
            >
              <Text style={styles._forgot_btn_text}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* ==================================> ** REMEMBER ** <================================== */}
          <View style={styles._remember_main}>
            <TouchableOpacity style={styles._check}>
              <Feather name="check" size={17} color="#504DE5" />
            </TouchableOpacity>
            <Text style={styles._remember_text}>Remember Me</Text>
          </View>

          {/* ==================================> ** SIGN IN ** <================================== */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={styles._button_txt}>Sign in</Text>
          </TouchableOpacity>

          {/* ==================================> ** OR ** <================================== */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 300,
              marginTop: 20,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#F0F2F6" }} />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  fontSize: 12,
                  color: "#6F8BA4",
                }}
              >
                OR
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "#F0F2F6" }} />
          </View>

          {/* ==================================> ** SIGN UP ** <================================== */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("SignUp")}
          >
            <Text style={styles._button_txt}>Sign up</Text>
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
  _back_icon_btn: {
    marginTop: 20,
  },
  _logo_main: {
    alignItems: "center",
    marginTop: 40,
  },
  _input_main: {
    borderRadius: 20,
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#DCDBFF",
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
    marginTop: 10,
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
  _logo: {
    width: 167,
    height: 201,
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
    fontSize: 14,
    color: "black",
    letterSpacing: 1,
  },
});

export default LogIn;
