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
  EvilIcons,
} from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Notifications = (props) => {
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
      notificationsMessage: "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Linguina Nettlewater",
      notificationsTime: "45 min",
      notificationsMessage: "Curabitur scelerisque tellus vel venenatis scelerisque. Fusce varius, ligula ut.",
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 min",
      notificationsMessage: "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 min",
      notificationsMessage: "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 min",
      notificationsMessage: "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 min",
      notificationsMessage: "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
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
        <Text style={styles._header_text}>Notifications</Text>
        <TouchableOpacity style={styles._search_icon} onPress={() => props.navigation.navigate("Search")}>
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* ==================================> ** BODY ** <================================== */}
      <ScrollView>
        <View style={{ margin: 20 }}>
          {/* ==================================> ** NOTIFICATION ** <================================== */}
          {NotificationsData.map((v, i) => {
            return (
              <View style={styles._Notification_Card_main} >
                <View style={styles._Notification_User_main}>
                  <View style={styles._user_profile_main}>
                    <Image
                      source={require("./../../images/profile.png")}
                      style={styles._user_profile}
                    />
                  </View>
                  <View style={styles._user_name_main}>
                    <Text style={styles._user_name}>{v.userName}</Text>
                  </View>
                  <View style={styles._Notification_time_main}>
                    <Text style={styles._Notification_time}>{v.notificationsTime}</Text>
                  </View>
                </View>
                <Text style={styles._Notification_message}>{v.notificationsMessage}</Text>
              </View>
            );
          })}
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
    marginLeft: 20,
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
    marginTop: 20
  },
  _Notification_User_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_profile_main: {
    width: "20%",
  },
  _user_name_main: {
    width: "65%",
  },
  _Notification_time_main: {
    width: "15%",
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



});

export default Notifications;
