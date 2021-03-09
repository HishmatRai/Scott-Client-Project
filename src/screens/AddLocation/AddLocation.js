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
} from "react-native";
import {
  Feather,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import GoogleMap from "./../../Components/Map/Map";
import RBSheet from "react-native-raw-bottom-sheet";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const AddLocation = (props) => {
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
          <MaterialIcons name="keyboard-backspace" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles._header_text}>Add Location</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles._header_text2}>Publish</Text>
        </TouchableOpacity>
      </View>

      {/* ==================================> ** GOOGLE MAP SHOW **  <================================== */}
      <ScrollView>
        <View style={styles._map_main}>
          <GoogleMap />
        </View>
        <View style={styles._tabview_main}>
          <TouchableOpacity
            style={styles._bottomsheet_btn}
            onPress={() => this.RBSheet.open()}
          >
            <Feather name="more-horizontal" size={24} color="#6F8BA4" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._bottomsheet_btn}>
            <FontAwesome name="send" size={20} color="#6F8BA4" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ==================================> ** BOTTOM SHEET START ** <================================== */}
      {/* bottom sheet */}
      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}
      >
        <Text style={styles._line}></Text>

        {/* ==================================> ** BOTTOM SHEET ** <================================== */}
        <ScrollView>
          {/* bottom sheeet */}
          <View style={styles._bottomsheet_man}>
            {/* ==================================> ** CURRENT LOCATION ** <================================== */}
            <TouchableOpacity style={styles._location_btn_main}>
              <View style={styles._location_icon}>
                <Ionicons name="location-outline" size={24} color="white" />
              </View>
              <Text style={styles._location_heading}>
                {" "}
                Use my current location
              </Text>
            </TouchableOpacity>

            {/* ==================================> ** LOCATION 02 ** <================================== */}
            <TouchableOpacity style={styles._location_btn_main}>
              <View style={styles._location_icon2}>
                <Ionicons name="location-outline" size={24} color="white" />
              </View>
              <Text style={styles._location_heading}>
                {" "}
                Leesburg, Virginia(VA), 20176
              </Text>
            </TouchableOpacity>

            {/* ==================================> ** LOCATION 03 ** <================================== */}
            <TouchableOpacity style={styles._location_btn_main}>
              <View style={styles._location_icon2}>
                <Ionicons name="location-outline" size={24} color="white" />
              </View>
              <Text style={styles._location_heading}>
                {" "}
                Leesburg, Virginia(VA), 20176
              </Text>
            </TouchableOpacity>

            {/* ==================================> ** LOCATIN 04 ** <================================== */}
            <TouchableOpacity style={styles._location_btn_main}>
              <View style={styles._location_icon2}>
                <Ionicons name="location-outline" size={24} color="white" />
              </View>
              <Text style={styles._location_heading}>
                {" "}
                Leesburg, Virginia(VA), 20176
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* ==================================> ** SEARCH LOCATION ** <================================== */}
        <View style={styles._input_main}>
          <View style={styles._email_input_view}>
            <TextInput
              style={styles._input}
              placeholder="Search in location"
              placeholderTextColor="#6F8BA4"
            />
          </View>
        </View>
      </RBSheet>
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
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    backgroundColor: "#33CC66",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  _header_text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  _header_text2: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
  },
  _map_main: {
    height: 600,
  },
  _tabview_main: {
    marginLeft: "80%",
    position: "absolute",
    top: 100,
  },
  _bottomsheet_btn: {
    backgroundColor: "white",
    elevation: 5,
    marginTop: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  _line: {
    backgroundColor: "#C8D4DF",
    width: 40,
    height: 5,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  _input_main: {
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#DCDBFF",
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
  },
  _email_input_view: {
    // backgroundColor: "green",
    width: "100%",
  },
  _input: {
    color: "#6F8BA4",
    fontSize: 12,
  },
  _bottomsheet_man: {
    margin: 20,
  },
  _location_btn_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _location_icon: {
    backgroundColor: "#504DE5",
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  _location_icon2: {
    backgroundColor: "#AEB5C0",
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  _location_heading: {
    fontSize: 14,
    color: "#3B566E",
    letterSpacing: 0.5,
  },
});

export default AddLocation;
