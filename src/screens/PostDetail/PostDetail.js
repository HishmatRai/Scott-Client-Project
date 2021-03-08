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
} from "react-native";
import {
  Entypo,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const PostDetail = (props) => {
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
      <View style={styles._header_main}>
        <TouchableOpacity>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles._heading}>Inverness's Post</Text>
      </View>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <View style={styles._Notification_User_main}>
            <View style={styles._user_profile_main}>
              <Image
                source={require("./../../images/profile.png")}
                style={styles._user_profile}
              />
            </View>
            <View style={styles._user_name_main}>
              <Text style={styles._user_name}>Inverness McKenzie</Text>
            </View>
            <View style={styles._Notification_time_main}>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={24} color="#C8D4DF" />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              color: "#6F8BA4",
              fontSize: 14,
              letterSpacing: 0.5,
              marginTop: 15,
            }}
          >
            Curabitur scelerisque tellus vel venenatis nun scelerisque. Fusce
            varius, ligula ut lobortis at interdum, mi nisi feugiat lacus.
          </Text>
          <Text
            style={{
              color: "#6F8BA4",
              fontSize: 14,
              letterSpacing: 0.5,
              marginTop: 15,
            }}
          >
            Praesent eget libero in nulla interdum interdu consequat. Morbi et
            malesuada metus amet Integer mauris leo, auctor sit amet hendrerit
            eget, vestibulum ut ligula suspendisse in.
          </Text>
          <View style={styles._like_main}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <TouchableOpacity>
                  <AntDesign name="hearto" size={20} color="#504DE5" />
                </TouchableOpacity>
                <Text style={styles._count}>200</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <FontAwesome5 name="comment" size={20} color="#6F8BA4" />
                </TouchableOpacity>
                <Text style={styles._count}>200</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="export-variant"
                  size={20}
                  color="#6F8BA4"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 30 }}></View>
          <View style={styles._Notification_User_main}>
            <View style={styles._user_profile_main}>
              <Image
                source={require("./../../images/Mask.png")}
                style={styles._user_profile}
              />
            </View>
            <View style={styles._user_name_main}>
              <Text style={styles._user_name}>Inverness McKenzie</Text>
            </View>
            <View style={styles._Notification_time_main}>
              <Text style={styles._Notification_time}>15 min</Text>
            </View>
          </View>
          <Text
            style={{
              color: "#6F8BA4",
              fontSize: 14,
              letterSpacing: 0.5,
              marginTop: 15,
            }}
          >
            Curabitur scelerisque tellus vel venenatis nun scelerisque. Fusce
            varius, ligula ut lobortis at interdum, mi nisi feugiat lacus.
          </Text>
          <View style={{ margin: 20 }}>
            <View style={styles._Notification_User_main}>
              <View style={styles._user_profile_main}>
                <Image
                  source={require("./../../images/Mask.png")}
                  style={styles._user_profile}
                />
              </View>
              <View style={styles._user_name_main}>
                <Text style={styles._user_name}>Inverness McKenzie</Text>
              </View>
              {/* <View style={styles._Notification_time_main}>
              <Text style={styles._Notification_time}>15 min</Text>
            </View> */}
            </View>
            <Text
              style={{
                color: "#6F8BA4",
                fontSize: 14,
                letterSpacing: 0.5,
                marginTop: 15,
              }}
            >
              Curabitur scelerisque tellus vel venenatis nun scelerisque. Fusce
              varius, ligula ut lobortis at interdum, mi nisi feugiat lacus.
            </Text>
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
  _header_main: {
    backgroundColor: "#33CC66",
    paddingTop: 40,
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 20,
    alignItems: "center",
  },
  _heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginLeft: "25%",
  },
  _Notification_User_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_profile_main: {
    width: "20%",
    //   backgroundColor:"red"
  },
  _user_name_main: {
    width: "65%",
    // backgroundColor:"green"
  },
  _Notification_time_main: {
    width: "15%",
    // backgroundColor:"yellow"
  },
  _user_name: {
    color: "#3B566E",
    fontSize: 15,
    letterSpacing: 1,
  },
  _Notification_time: {
    color: "#6F8BA4",
    fontSize: 13,
    letterSpacing: 1,
  },
  _like_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _count: {
    fontSize: 13,
    color: "#AEB5C0",
    marginLeft: 10,
  },
  _user_profile:{
    width:50,
    height:50,
    borderRadius:20
  }
});

export default PostDetail;
