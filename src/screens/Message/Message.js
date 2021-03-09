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
  TextInput,
} from "react-native";
import { Feather, Ionicons, EvilIcons } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Message = (props) => {
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
  let activeUser = [
    { userName: "Dianne" },
    { userName: "Dianne" },
    { userName: "Dianne" },
    { userName: "Dianne" },
    { userName: "Dianne" },
    { userName: "Dianne" },
    { userName: "Dianne" },
    { userName: "Dianne" },
  ];
  let chatUser = [
    {
      userName: "Gunther Beard",
      userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…",
      time: "15 min",
      unreadMessage: "1",
    },
    {
      userName: "Gunther Beard",
      userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…",
      time: "32 min",
      unreadMessage: "3",
    },
    {
      userName: "Gunther Beard",
      userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…",
      time: "45 min",
      unreadMessage: "2",
    },
    {
      userName: "Gunther Beard",
      userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…",
      time: "32 min",
      unreadMessage: "3",
    },
    {
      userName: "Gunther Beard",
      userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…",
      time: "32 min",
      unreadMessage: "3",
    },
    {
      userName: "Gunther Beard",
      userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…",
      time: "32 min",
      unreadMessage: "3",
    },
    {
      userName: "Gunther Beard",
      userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…",
      time: "32 min",
      unreadMessage: "3",
    },
  ];
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
        <Text style={styles._heading}>Chats</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>

          {/* ==================================> ** SEARCH ** <================================== */}
          <View style={styles._search_main}>
            <EvilIcons name="search" size={24} color="#C6C6C6" />
            <TextInput
              style={styles._input}
              placeholder="Search"
              placeholderTextColor="#C6C6C6"
            />
          </View>

          {/* ==================================> ** CAMERA ** <================================== */}
          <View style={styles._camera_main}>
            <TouchableOpacity style={styles._camera_btn}>
              <Feather name="camera" size={20} color="#33CC66" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ==================================> ** BODY ** <================================== */}
      <ScrollView>
        <View style={{ margin: 20 }}>

  {/* ==================================> ** ONLINE FRIENDS ** <================================== */}
          <Text
            style={{
              fontSize: 15,
              color: "#3B566E",
              letterSpacing: 1,
              fontWeight: "bold",
            }}
          >
            Online Friends
          </Text>

          {/* ==================================> ** ONLINE USER ** <================================== */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles._all_user_show_main}>
              {activeUser.map((v, i) => {
                return (
                  <View style={styles._user_main}>
                    <View>
                      <TouchableOpacity style={styles.user_profile_main}>
                        <Image
                          source={require("./../../images/live_user.png")}
                          style={styles._profile_image}
                        />
                      </TouchableOpacity>
                      <Text style={styles._user_name}>{v.userName}</Text>
                    </View>
                    <Text style={styles._counter}></Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>

          {/* ==================================> ** CHAT ** <================================== */}
          {chatUser.map((v, i) => {
            return (
              <TouchableOpacity
                style={styles._message_list_main}
                onPress={() => props.navigation.navigate("MessageDetails")}
              >

                {/* ==================================> ** PROFILE ** <================================== */}
                <View style={styles._message_list_profile_main}>
                  <View>
                    <TouchableOpacity>
                      <Image
                        source={require("./../../images/chat_image.png")}
                        style={styles.chat_profile_image}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles._active}></Text>
                </View>

                {/* ==================================> ** MESSAGE ** <================================== */}
                <View style={styles._message_list_message_main}>
                  <Text
                    style={{
                      color: "#3B566E",
                      fontSize: 15,
                      letterSpacing: 1,
                      marginLeft: 5,
                    }}
                  >
                    {v.userName}
                  </Text>
                  <Text
                    style={{
                      color: "#C6C6C6",
                      fontSize: 12,
                      letterSpacing: 1,
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    {v.userMessage}
                  </Text>
                </View>

                {/* ==================================> ** TIME AND UNREAD MESSAGE ** <================================== */}
                <View style={styles._message_list_time_main}>
                  <Text style={{ color: "#C6C6C6", fontSize: 12 }}>
                    {v.time}
                  </Text>
                  <Text style={styles._unread_message}>{v.unreadMessage}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* ==================================> ** ADD BUTTON ** <================================== */}
      <View style={styles._add_main}>
        <TouchableOpacity style={styles._add_btn}>
          <Ionicons name="ios-add-outline" size={24} color="white" />
        </TouchableOpacity>
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
    backgroundColor: "#33CC66",
    padding: 20,
  },
  _heading: {
    fontSize: 31,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
    marginTop: 10,
  },
  _search_main: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  _camera_main: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  _input: {
    color: "#C6C6C6",
    width: "85%",
    marginLeft: 5,
  },
  _camera_btn: {
    height: 32,
    width: 32,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  _all_user_show_main: {
    marginTop: 30,
    flexDirection: "row",
    paddingBottom: 40,
  },
  _user_main: {
    marginRight: 17,
  },
  user_profile_main: {
    width: 44,
    height: 44,
    borderRadius: 50,
    borderColor: "#FF8802",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
  },
  _profile_image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  _user_name: {
    color: "#3B566E",
    fontSize: 13,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  _counter: {
    width: 14,
    height: 14,
    backgroundColor: "#80EA4E",
    marginTop: -30,
    marginLeft: 30,
    borderRadius: 14 / 2,
    overflow:"hidden"
  },
  _message_list_main: {
    flexDirection: "row",
    marginBottom: 20,
  },
  _message_list_profile_main: {
    width: "20%",
    alignItems: "center",
  },
  _message_list_message_main: {
    width: "60%",
  },
  _message_list_time_main: {
    width: "20%",
    alignItems: "center",
  },
  chat_profile_image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  _active: {
    width: 19,
    height: 19,
    backgroundColor: "#80EA4E",
    borderRadius: 19 / 2,
    overflow:"hidden",
    marginTop: -15,
    marginLeft: 35,
    borderWidth: 2,
    borderColor: "white",
    
  },
  _unread_message: {
    backgroundColor: "#33CC66",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: 20 / 4,
    overflow:"hidden",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
    textAlign: "center",
  },
  _add_main: {
    position: "absolute",
    bottom: 15,
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
});

export default Message;
