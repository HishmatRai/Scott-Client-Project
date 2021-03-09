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
import { ScrollView } from "react-native-gesture-handler";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Welcome = (props) => {
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
          <Image
            source={require("./../../images/welcome1.png")}
            style={styles._welcome_image}
          />
          <View style={styles._active_show_main}>
            <View style={styles._active}></View>
            <View style={styles._show_dot}></View>
            <View style={styles._show_dot}></View>
          </View>
          <Text style={styles.hairWords}>Welcome</Text>
          <Text style={styles._Des}>
            Meet people based on places they are located follow places to see
            more post and meet more people.
          </Text>
        </View>
      </ScrollView>

       {/* ==================================> ** NEXT ** <================================== */}
          <View style={styles._next_main}>
            <TouchableOpacity style={styles._next_btn}  onPress={() => props.navigation.navigate("Welcome2")}>
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
  },
  _show_dot: {
    height: 7,
    width: 7,
    backgroundColor: "rgba(51,204,102,0.45)",
    borderRadius: 20,
    marginLeft: 10,
  },
  hairWords: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    color: "#3B566E",
    marginTop: 20,
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
   bottom:20,
   marginRight:20
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
    color:"white"
  },
});

export default Welcome;
