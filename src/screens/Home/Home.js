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
import { Feather, MaterialIcons, EvilIcons, Entypo,AntDesign,FontAwesome5 } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Home = (props) => {
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
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
        link:"www.offerstika.com"
    },
    {
      userName: "Linguina Nettlewater",
      notificationsTime: "45 min",
      notificationsMessage:
        "Curabitur scelerisque tellus vel venenatis scelerisque. Fusce varius, ligula ut.",
        link:""
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
        link:"www.offerstika.com"
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
        link:"www.offerstika.com"
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
        link:"www.offerstika.com"
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
        link:"www.offerstika.com"
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
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Entypo name="menu" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles._header_text}>Home</Text>
        <TouchableOpacity style={styles._search_icon}>
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ margin: 20 }}>
          {/* ======================== */}
          {NotificationsData.map((v, i) => {
            return (
              <View style={styles._Notification_Card_main}>
                <View style={styles._Notification_User_main}>
                  <View style={styles._user_profile_main}>
                    <Image
                      source={require("./../../images/Mask.png")}
                      style={styles._user_profile}
                    />
                  </View>
                  <View style={styles._user_name_main}>
                    <Text style={styles._user_name}>{v.userName}</Text>
                  </View>
                  <View style={styles._Notification_time_main}>
                    <Text style={styles._Notification_time}>
                      {v.notificationsTime}
                    </Text>
                  </View>
                </View>
                <Text style={styles._Notification_message}>
                  {v.notificationsMessage}
                </Text>
                <Text style={{color:"#504DE5",fontSize:14,marginTop:10}}>{v.link}</Text>
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
      <View style={styles._tab_navigation_main}>
        <View style={styles._tab_navigation}>
          <TouchableOpacity>
            <Feather name="home" size={34} color="#989BA5" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="message-square" size={34} color="#989BA5" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications-none"
              size={34}
              color="#33CC66"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles._active_tab}>
            <Feather name="user" size={34} color="#989BA5" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _header: {
    paddingTop: 40,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#33CC66",
    alignItems: "center",
  },
  _header_text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  _search_icon: {
    backgroundColor: "#80EA4E",
    height: 30,
    width: 30,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 10,
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
  _user_profile: {
    height: 40,
    width: 40,
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
    bottom: 0,
  },
  _tab_navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingTop: 15,
    paddingBottom: 10,
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
  //   tab navigation end
});

export default Home;
