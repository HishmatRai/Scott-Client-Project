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
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Profile6 = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
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
          <Ionicons name="ios-arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles._heading}>Piff's Profile</Text>
      </View>

      <ScrollView>
        <View style={{ margin: 20 }}>
          <View style={styles._profile_main}>
            <View style={styles._profile_main_view}>
              <Image
                source={require("./../../images/dollted_img.png")}
                style={styles._dotted_image}
              />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles._user_name1}>Piff Jenkins</Text>
              <Text style={styles._user_pation}>UI Designer</Text>
              <Text style={styles._email}>www.your@name.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles._add_btn}>
            <MaterialIcons name="add" size={18} color="white" />
          </TouchableOpacity>
          <View style={styles._following_main}>
            <View>
              <Text style={styles._following}>FOLLOWİNG</Text>
              <Text style={styles._following_count}>115</Text>
            </View>
            <View>
              <Text style={styles._following}>FOLLOWERS</Text>
              <Text style={styles._following_count}>2.703</Text>
            </View>
          </View>

          <View style={styles._follow_main}>
            <TouchableOpacity style={styles._follow_btn}>
              <Text style={styles._follow_btn_text}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles._send_btn}>
              <FontAwesome name="send-o" size={20} color="black" />
            </TouchableOpacity>
          </View>

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
                  <Text style={styles._Notification_time}>
                      {v.notificationsTime}
                    </Text>
                </View>
                <View style={styles._Notification_time_main}>
                <TouchableOpacity>
                      <Feather name="more-horizontal" size={24} color="#C8D4DF" />
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
  _profile_main: {
    flexDirection: "row",
    alignItems: "center",
    //   justifyContent:"space-between"
  },
  _profile_main_view: {
    width: 95,
    height: 95,
    borderRadius: 10,
    borderColor: "#979797",
    borderWidth: 1,
    borderStyle: "dashed",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  _user_name1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  _user_pation: {
    fontSize: 12,
    color: "#3B566E",
  },
  _email: {
    fontSize: 12,
    color: "#33CC66",
    marginTop: 5,
  },
  _dotted_image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  _add_btn: {
    backgroundColor: "#2F5E3E",
    height: 25,
    width: 25,
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: 75,
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    marginTop: -20,
  },
  _following_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  _following: {
    color: "#6F8BA4",
    fontSize: 12,
    textAlign: "center",
  },
  _following_count: {
    color: "#3B566E",
    fontSize: 14,
    textAlign: "center",
  },
  _follow_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    marginTop:20
  },
  _follow_btn: {
    backgroundColor: "#33CC66",
    borderRadius: 20,
    width:"70%",
    alignItems:"center",
    paddingBottom:5,
    paddingTop:5
  },
  _send_btn: {
    backgroundColor: "#8AFAB0",
    borderRadius: 5,
    width:"20%",
    paddingBottom:5,
    paddingTop:5,
    alignItems:"center",
  },
  _follow_btn_text:{
    color:"white",
    fontSize:15,
    fontWeight:"bold"
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
    // alignItems: "center",
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
    marginTop:20
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
});

export default Profile6;
