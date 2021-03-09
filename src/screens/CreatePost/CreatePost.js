import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Ionicons, Entypo, EvilIcons } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const CreatePast = (props) => {
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

      {/* ==================================> ** HEADER ** <================================== */}
      <View style={styles._header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles._header_text}>Create Post</Text>
        <TouchableOpacity
          style={styles._location}
          onPress={() => props.navigation.navigate("AddLocation")}
        >
          <EvilIcons name="location" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* ==================================> ** BODY ** <================================== */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20 }}>
          <Text style={styles._title}>Title</Text>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Write something…"
            placeholderTextColor="#6F8BA4"
            numberOfLines={5}
            multiline={true}
          />
          <View>
            {/* ==================================> ** ADD IMAGES ** <================================== */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles._image_main}>
                <Image
                  source={require("./../../images/dollted_img.png")}
                  style={styles._dotted_image}
                />
                <Image
                  source={require("./../../images/dollted_img.png")}
                  style={styles._dotted_image}
                />
                <TouchableOpacity style={styles._add_btn}>
                  <Ionicons name="add-sharp" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* ==================================> ** PUBLISH BUTTON ** <================================== */}
            <TouchableOpacity
              style={styles._Publish_btn}
              onPress={() => props.navigation.navigate("Home")}
            >
              <Text style={styles._Publish_btn_text}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  _header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
  _header_text: {
    fontWeight: "bold",
    color: "#3B566E",
    fontSize: 18,
  },
  _location: {
    backgroundColor: "#33CC66",
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  _title: {
    fontSize: 22,
    color: "#6F8BA4",
  },
  _image_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _add_btn: {
    width: 90,
    height: 90,
    borderRadius: 5,
    backgroundColor: "#F7F7FF",
    alignItems: "center",
    justifyContent: "center",
  },
  _dotted_image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  _Publish_btn: {
    backgroundColor: "#33CC66",
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
  _Publish_btn_text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
});

export default CreatePast;
