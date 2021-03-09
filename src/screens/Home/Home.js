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
  EvilIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
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
      link: "www.offerstika.com",
    },
    {
      userName: "Linguina Nettlewater",
      notificationsTime: "45 min",
      notificationsMessage:
        "Curabitur scelerisque tellus vel venenatis scelerisque. Fusce varius, ligula ut.",
      link: "",
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
      link: "www.offerstika.com",
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
      link: "www.offerstika.com",
    },
    {
      userName: "Richard Tea",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
      link: "www.offerstika.com",
    },
    {
      userName: "Dianne Ameter",
      notificationsTime: "32 min",
      notificationsMessage:
        "Nulla sed ullamcorper ligula. Vivamus sit amet tellus fermentum, sodales dui id.",
      link: "www.offerstika.com",
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
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Entypo name="menu" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles._header_text}>Home</Text>
        <TouchableOpacity
          style={styles._search_icon}
          onPress={() => props.navigation.navigate("Search")}
        >
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* ==================================> ** BODY ** <================================== */}
      <ScrollView>
        <View style={{ margin: 20 }}>
          {/* ==================================> ** CREATE POST ** <================================== */}
          <View style={styles._post_main}>
            <Image
              source={require("./../../images/Mask.png")}
              style={styles._user_profile}
            />
            <TouchableOpacity
              style={styles._create_post_btn}
              onPress={() => props.navigation.navigate("CreatePost")}
            >
              <Text style={styles._create_post_btn_text}>
                What do you feel?
              </Text>
            </TouchableOpacity>
          </View>

          {/* ==================================> ** VIDEO IMAGES LOCATION ** <================================== */}
          <View style={styles._video_main}>
            <TouchableOpacity style={styles._video_btn}>
              <Feather name="video" size={24} color="#C8D4DF" />
              <Text style={styles._video_btn_text}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles._video_btn}>
              <Feather name="camera" size={24} color="#C8D4DF" />
              <Text style={styles._video_btn_text}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles._video_btn2}
              onPress={() => props.navigation.navigate("AddLocation")}
            >
              <Ionicons name="location-outline" size={24} color="#C8D4DF" />
              <Text style={styles._video_btn_text}>Location</Text>
            </TouchableOpacity>
          </View>

          {/* ==================================> ** POST CARD ** <================================== */}
          {NotificationsData.map((v, i) => {
            return (
              <View style={styles._Notification_Card_main}>
                {/* ==================================> ** USER DATA ** <================================== */}
                <TouchableOpacity
                  style={styles._Notification_User_main}
                  onPress={() => props.navigation.navigate("PostDetail")}
                >
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
                </TouchableOpacity>

                {/* ==================================> ** POST DES ** <================================== */}
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("PostDetail")}
                >
                  <Text style={styles._Notification_message}>
                    {v.notificationsMessage}
                  </Text>
                </TouchableOpacity>

                {/* ==================================> ** POST IMAGE ** <================================== */}
                <Image
                  source={require("./../../images/homepost.png")}
                  style={styles._user_post_img}
                />

                {/* ==================================> ** LIKE SHARE AND COMMENT ** <================================== */}
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
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
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
    marginLeft: 10,
    marginRight: 10,
  },
  _video_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: "#F9F9F9",
    borderTopWidth: 1,
    borderBottomColor: "#F9F9F9",
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  _video_btn: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    borderRightColor: "#F9F9F9",
    borderRightWidth: 1,
  },
  _video_btn2: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
  },
  _video_btn_text: {
    fontSize: 12,
    color: "#6F8BA4",
    marginLeft: 10,
  },
  _post_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  _create_post_btn: {
    marginLeft: 20,
  },
  _create_post_btn_text: {
    color: "#6F8BA4",
    fontSize: 15,
    letterSpacing: 1,
  },
});

export default Home;
