import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import DatePiker from './../../Components/DatePiker/DatePiker'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const EditeProfile = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [value, onChangeText] = React.useState("gilesposture");
  const [valueEmail, onChangeTextEmail] = React.useState("giles@posture.com");
  const [valuePhone, onChangeTextPhone] = React.useState("+12 34567 890");
  const [valueGender, onChangeTextGender] = React.useState("Female");
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
      <View style={styles._header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialIcons name="keyboard-backspace" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles._header_text}>Edit Profile</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Text style={styles._header_text}>Done</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20 }}>
          <View style={styles._user_profile_main}>
            <Image
              source={require("./../../images/Mask.png")}
              style={styles._user_profile}
            />
          </View>
          <Text style={styles._change_profile_heading}>
            Change Profile Picture
          </Text>
          <View style={styles._edit_main}>
            <View style={styles._title_main}>
              <Text style={styles._title}>User Name</Text>
            </View>
            <View style={styles._value_main}>
              <TextInput
                style={styles._input}
                onChangeText={(text) => onChangeText(text)}
                value={value}
                placeholderTextColor="#6F8BA4"
              />
            </View>
          </View>

          <View style={styles._edit_main}>
            <View style={styles._title_main}>
              <Text style={styles._title}>Your Email</Text>
            </View>
            <View style={styles._value_main}>
              <TextInput
                style={styles._input}
                onChangeText={(text) => onChangeTextEmail(text)}
                value={valueEmail}
                placeholderTextColor="#6F8BA4"
              />
            </View>
          </View>

          <View style={styles._edit_main}>
            <View style={styles._title_main}>
              <Text style={styles._title}>Phone</Text>
            </View>
            <View style={styles._value_main}>
              <TextInput
                style={styles._input}
                onChangeText={(text) => onChangeTextPhone(text)}
                value={valuePhone}
                placeholderTextColor="#6F8BA4"
                keyboardType="numeric"
              />
            </View>
          </View>
          
          <View style={styles._edit_main}>
            <View style={styles._title_main}>
              <Text style={styles._title}>Gender</Text>
            </View>
            <View style={styles._value_main}>
              <TextInput
                style={styles._input}
                onChangeText={(text) => onChangeTextGender(text)}
                value={valueGender}
                placeholderTextColor="#6F8BA4"
              />
            </View>
          </View>
                
          <View style={styles._edit_main}>
            <View style={styles._title_main}>
              <Text style={styles._title}>Date Of Birth</Text>
            </View>
            <View style={styles._value_main}>
              <DatePiker />
            </View>
          </View>

          <View style={{marginTop:20}}>
          <Text style={styles._title}>About</Text>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholderTextColor="#6F8BA4"
            numberOfLines={5}
            multiline={true}
          />
          </View>
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
  _header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#33CC66",
  },
  _header_text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  _user_profile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  _user_profile_main: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderColor: "#504DE5",
    borderWidth: 2,
    borderStyle: "dashed",
    padding: 5,
  },
  _change_profile_heading: {
    fontSize: 14,
    color: "#E53D53",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 10,
  },
  _edit_main: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#979797",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  _title_main: {
    // backgroundColor: "red",
    width: "50%",
  },
  _value_main: {
    // backgroundColor: "blue",
    width: "50%",
    alignItems: "flex-end",
  },
  _input: {
    color: "#6F8BA4",
  },
  _title: {
    fontSize: 14,
    color: "#3B566E",
  },
  textArea:{
      borderColor:"#707070",
      borderWidth:1,
      marginTop:10,
      borderRadius:5
  }
});

export default EditeProfile;
