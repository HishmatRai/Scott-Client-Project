import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Welcome2 = (props) => {
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
        barStyle="white"
        hidden={false}
        backgroundColor="#33CC66"
        translucent={true}
      />

      {/* ==================================> ** BODY ** <================================== */}
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.hairWords}>Welcome</Text>
          <Text style={styles._Des}>
            Post a feed and your post will be visible to people living at same
            place as you and also the places you follow
          </Text>
          <View style={styles._slider_main}>
            <Image
              source={require("./../../images/slider3.png")}
              style={styles._slider3_image}
            />
            <Image
              source={require("./../../images/slider1.png")}
              style={styles._slider1_image}
            />
            <Image
              source={require("./../../images/slider2.png")}
              style={styles._slider2_image}
            />
          </View>
          <View style={styles._active_show_main}>
            <View style={styles._show_dot}></View>
            <View style={styles._active}></View>
            <View style={styles._show_dot}></View>
          </View>
        </View>
      </ScrollView>

      {/* ==================================> ** NEXT ** <================================== */}
      <View style={styles._next_main}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Welcome")}>
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles._next_btn} onPress={() => props.navigation.navigate("Welcome3")}>
          <Text style={styles._next_btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  _welcome_image: {
    width: "100%",
    marginTop: 50,
    height: 350,
    borderRadius: 20,
  },
  _active_show_main: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
  },
  _active: {
    height: 11,
    width: 11,
    backgroundColor: "#33CC66",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  _show_dot: {
    height: 7,
    width: 7,
    backgroundColor: "rgba(51,204,102,0.45)",
    borderRadius: 20,
  },
  hairWords: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    color: "#3B566E",
    marginTop: 30,
    textAlign: "center",
  },
  _Des: {
    fontSize: 15,
    color: "#6F8BA4",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 10,
  },
  _next_main: {
    bottom: 20,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _next_btn: {
    backgroundColor: "#33CC66",
    width: "30%",
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  _next_btn_text: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  _slider_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40
  },
  _slider1_image: {
    height: 230,
    width: 230,
    borderRadius: 20,
  },
  _slider2_image: {
    height: 138,
    width: 138,
    marginRight: -100,
    borderRadius: 20,
  },
  _slider3_image: {
    height: 138,
    width: 138,
    marginLeft: -100,
    borderRadius: 20,
  },
});

export default Welcome2;
