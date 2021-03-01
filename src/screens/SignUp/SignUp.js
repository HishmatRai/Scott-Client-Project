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
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Zocial,
  FontAwesome,
} from "@expo/vector-icons";
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
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <View style={styles._main}>
        <View style={styles._header_main}>
          <TouchableOpacity>
            <Ionicons name="md-arrow-round-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles._header_text}>SIGN UP</Text>
          <Text style={styles._header_text}></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 20 }}>
            <View style={styles._input_main}>
              <View style={styles._email_icons_view}>
                <FontAwesome name="user-circle" size={24} color="#777777" />
              </View>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="Username"
                  placeholderTextColor="#db2022"
                />
              </View>
            </View>
            <View style={styles._input_main}>
              <View style={styles._email_icons_view}>
                <MaterialIcons name="email" size={24} color="#777777" />
              </View>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="Email Address"
                  placeholderTextColor="black"
                />
              </View>
            </View>
            <View style={styles._input_main}>
              <View style={styles._email_icons_view}>
                <MaterialIcons name="lock" size={24} color="#777777" />
              </View>
              <View style={styles._email_input_view}>
                <TextInput
                  style={styles._input}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </View>
          <View style={styles._term_condition}>
            <AntDesign name="checkcircle" size={24} color="#33cc66" />
            <Text style={styles._agree_text}>I agree to the</Text>
            <TouchableOpacity>
              <Text style={styles._forgot_btn_text}>Terms and Conditions</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("LogIn")}>
            <Text style={styles._button_txt}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={styles._already_member}>
            <Text style={styles._already_member_text}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("LogIn")}>
              <Text style={styles._signin_btn_text}>Sign in</Text>
            </TouchableOpacity>
          </View>
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
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    // borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  _email_icons_view: {
    // backgroundColor: "red",
    width: "15%",
  },
  _email_input_view: {
    // backgroundColor: "green",
    width: "85%",
  },
  _input: {
    fontWeight: "bold",
    color: "black",
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
    marginTop: 10,
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
    marginBottom:30
  },
  _agree_text: {
    color: "gray",
    marginLeft: 10,
    marginRight: 10,
  },
  _already_member: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    alignSelf: "center",
  },
  _already_member_text: {
    color: "gray",
    marginRight:4
  },
  _signin_btn_text:{
    letterSpacing: 1,
    color: "#33cc66",
    fontWeight:"bold",
    fontSize:20
  }
});

export default Signup;
