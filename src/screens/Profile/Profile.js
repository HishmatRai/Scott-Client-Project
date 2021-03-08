import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Profile = (props) => {
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

  let NotificationsData = [
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 minutes ago",
      notificationsMessage:"Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Linguina Nettlewater",
      notificationsTime: "45 minutes ago",
      notificationsMessage:"Curabitur scelerisque tellus vel venenatis scelerisque. Fusce varius, ligula ut.",
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 minutes ago",
      notificationsMessage:"Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 minutes ago",
      notificationsMessage:"Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 minutes ago",
      notificationsMessage:"Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 minutes ago",
      notificationsMessage:"Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
  ];
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
          <MaterialIcons name="keyboard-backspace" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles._header_text}>Profile</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Setting")}>
          <Feather name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ margin: 20 }}>
          {/* ======================== */}
          <View style={styles._profile_main}>
            <Image
              source={require("./../../images/profile.png")}
              style={styles._user_profile}
            />
          </View>
          <TouchableOpacity style={styles._add_btn2}>
            <Ionicons name="ios-add" size={14} color="white" />
          </TouchableOpacity>
          <Text style={styles._user_full_name}>Piff Jenkins</Text>
          <Text style={styles._user_user_name}>@piffjenkins</Text>
          <View style={styles._followers_main}>
            <View>
              <Text style={styles._following}>FOLLOWİNG</Text>
              <Text style={styles._following_counter}>115</Text>
            </View>
            <View>
              <Text style={styles._following}>FOLLOWERS</Text>
              <Text style={styles._following_counter}>2.703</Text>
            </View>
          </View>
          <Text style={styles._user_des}>
            Ut nulla purus, elementum at sollicitudin nec quis, commodo nec
            nunc. Fusce sed dictum eros.
          </Text>
          <View style={styles._edit_main}>
            <TouchableOpacity onPress={() => props.navigation.navigate("EditeProfile")}>
              <FontAwesome5 name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="image" size={24} color="#FF8802" />
            </TouchableOpacity>
          </View>
          {NotificationsData.map((v, i) => {
            return (
              <View style={styles._Notification_Card_main}>
                <View style={styles._Notification_User_main}>
                  <View style={styles._user_profile_main}>
                    <Image
                      source={require("./../../images/profile2.png")}
                      style={styles._user_profile2}
                    />
                  </View>
                  <View style={styles._user_name_main}>
                    <Text style={styles._user_name}>{v.userName}</Text>
                    <Text style={styles._Notification_time}>
                      {v.notificationsTime}
                    </Text>
                  </View>
                  <View style={styles._Notification_time_main}>
                    <TouchableOpacity>
                      <Feather name="more-horizontal" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles._Notification_message}>
                  {v.notificationsMessage}
                </Text>
                <Image
                  source={require("./../../images/homepost.png")}
                  style={styles._user_post_img}
                />
                <View style={styles._like_share_main}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity>
                      <AntDesign name="hearto" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles._like_show}>110</Text>
                    <TouchableOpacity>
                      <FontAwesome5 name="comment" size={20} color="#6F8BA4" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={styles._share_btn}>
                      <AntDesign name="sharealt" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
          {/* ======================== */}
        </View>
      </ScrollView>
      {/* <View style={styles._tab_navigation_main}>
        <View style={styles._tab_navigation}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <Feather name="home" size={30} color="#989BA5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Message")}>
            <Feather name="message-square" size={30} color="#989BA5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Notifications")}>
            <MaterialIcons
              name="notifications-none"
              size={30}
              color="#989BA5"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles._active_tab} onPress={() => props.navigation.navigate("Profile")}>
            <Feather name="user" size={30} color="#33CC66" />
          </TouchableOpacity>
        </View>
      </View> */}
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
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
  _header_text: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 18,
  },
  _profile_main: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignSelf: "center",
  },
  _user_profile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignSelf: "center",
  },
  _add_btn2: {
    backgroundColor: "#2F5E3E",
    width: 18,
    height: 18,
    borderRadius: 100,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25,
    marginLeft: 70,
    borderColor: "white",
    borderWidth: 2,
  },
  _user_full_name: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 20,
    color: "#333333",
    fontWeight: "bold",
    marginTop: 20,
    letterSpacing: 1,
  },
  _user_user_name: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 13,
    color: "#686363",
    letterSpacing: 1,
  },
  _followers_main: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  _following: {
    fontSize: 12,
    color: "#6F8BA4",
    textAlign: "center",
  },
  _following_counter: {
    fontSize: 14,
    color: "#3B566E",
    textAlign: "center",
    alignSelf: "center",
  },
  _user_des: {
    fontSize: 14,
    color: "#6F8BA4",
    letterSpacing: 1,
    marginTop: 20,
  },
  _edit_main: {
    flexDirection: "row",
    width: "40%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  _Notification_Card_main: {
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
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
  _user_profile2: {
    height: 50,
    width: 50,
    borderRadius: 20,
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
  _Notification_message: {
    color: "#6F8BA4",
    fontSize: 15,
    letterSpacing: 1,
    marginTop: 10,
  },
  _user_post_img: {
    width: "100%",
    borderRadius: 10,
  },
  _like_share_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft:10,
    paddingRight:10,
    marginTop:10
  },
  _share_btn: {
    backgroundColor: "#33CC66",
    height: 34,
    width: 34,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  _like_show: {
    color: "#AEB5C0",
    fontSize: 15,
    marginLeft:10,
    marginRight:10
  },
  //   tab navigation
  _tab_navigation_main: {
    bottom: 5,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 8,
  },
  _tab_navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: "white",
  },
  _active_dot: {
    color: "#FC6100",
    fontSize: 30,
    textAlign: "center",
    marginTop: -20,
  },
  _active_tab: {
    textAlign: "center",
    alignItems: "center",
  },
  _line: {
    backgroundColor: "#000000",
    height: 5,
    width: "40%",
    marginBottom: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 100,
  },
  _add_main: {
    position: "absolute",
    bottom: 70,
    width: "80%",
    alignSelf: "center",
  },

  _add_btn: {
    height: 40,
    width: 40,
    backgroundColor: "#FF8802",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  //   tab navigation end
});

export default Profile;
