import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Platform
} from "react-native";
import { Ionicons, Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import MusicPlayer from './../../Components/MusicPlayer'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const MessageDetails = (props) => {
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
      <View style={styles._header_main}>

        {/* ==================================> ** BACK AND MORE ** <================================== */}
        <View style={styles._back_icon_main}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="more-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* ==================================> ** USER PROFILE ** <================================== */}
        <View style={styles._message_list_main}>

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

          {/* ==================================> ** NAME AND STATUS ** <================================== */}
          <View style={styles._message_list_message_main}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                letterSpacing: 1,
                marginLeft: 5,
                fontWeight: "bold",
              }}
            >
              Quiche Hollandaise
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                letterSpacing: 1,
                marginLeft: 5,
              }}
            >
              Active Now
            </Text>
          </View>
        </View>
      </View>

      {/* ==================================> ** BODY ** <================================== */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20 }}>

          {/* ==================================> ** RECEIVE MESSAGE ** <================================== */}
          <View style={styles._message_receive_main}>
            <View style={styles._receive_message_user_profile_main}>
              <Image
                source={require("./../../images/receive_message.png")}
                style={styles.receive_message_profile_image}
              />
            </View>
            <View style={styles._receive_message_user_message_main}>
              <Text style={styles._receive_message_text}>
                Sed ligula erat, dignissim sit amet dictum id?
              </Text>
            </View>
            <View style={styles._receive_message_user_message_time_main}>
              <Text style={styles._receive_message_time}>01:15 PM</Text>
            </View>
          </View>

          {/* ==================================> ** SEND MESSAGE ** <================================== */}
          <View style={styles._message_send_main}>
            <View style={styles._send_message_user_message_time_main}>
              <Text style={styles._receive_message_time}>01:15 PM</Text>
            </View>
            <View style={styles._send_message_user_message_main}>
              <Text style={styles._send_message_text}>
                Sed ligula erat, dignissim sit amet dictum id?
              </Text>
            </View>
          </View>

          {/* ==================================> ** SEND MESSAGE AUDIO ** <================================== */}
          <View style={styles._message_send_main}>
            <View style={styles._send_message_user_message_time_main}>
              <Text style={styles._receive_message_time}>01:15 PM</Text>
            </View>
            <View style={styles._send_message_user_message_main}>

              {/* ==================================> ** AUDIO ** <================================== */}
              <MusicPlayer backgroundColor="#33CC66" borderColor="red"
                close={<AntDesign name="upcircleo" size={24} color="gray" style={{ marginHorizontal: 14, marginVertical: 10 }} />}
                open={<AntDesign name="downcircleo" size={24} color="gray" style={{ marginHorizontal: 14, marginVertical: 10 }} />}
                draOpen={false} draClose={false}
                type={
                  <TouchableOpacity style={styles._player_heading}>
                    <Text style={styles._jazlabel}>Lo-Fi</Text>
                  </TouchableOpacity>
                }
                margintop={-9}
              />
            </View>
          </View>
          <Text style={{ color: "#C8D4DF", fontSize: 12, letterSpacing: 1, alignSelf: "flex-end", marginTop: 5, marginRight: 10 }}>Quiche has been listening your voice</Text>

          {/* ==================================> ** NEW MESSAGE ** <================================== */}
          <Text style={styles._just_message}>Just Now</Text>

          {/* ==================================> ** RECEIVE MESSAGE ** <================================== */}
          <View style={styles._message_receive_main}>
            <View style={styles._receive_message_user_profile_main}>
              <Image
                source={require("./../../images/receive_message.png")}
                style={styles.receive_message_profile_image}
              />
            </View>
            <View style={styles._receive_message_user_message_main}>
              <Text style={styles._receive_message_text}>
                Sed ligula erat, dignissim sit amet dictum id?
              </Text>
            </View>
            <View style={styles._receive_message_user_message_time_main}>
              <Text style={styles._receive_message_time}>01:15 PM</Text>
            </View>
          </View>

          {/* ==================================> ** SEND MESSAGE ** <================================== */}
          <View style={styles._message_send_main}>
            <View style={styles._send_message_user_message_time_main}>
              <Text style={styles._receive_message_time}>01:15 PM</Text>
            </View>
            <View style={styles._send_message_user_message_main}>
              <Text style={styles._send_message_text}>
                Sed ligula erat, dignissim sit amet dictum id?
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* ==================================> ** MESSAGE ** <================================== */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ marginBottom: 10 }}
      >

        {/* ==================================> ** TYPE MESSAGE ** <================================== */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.text_message_main}>

            {/* ==================================> ** ATTACH FILE ** <================================== */}
            <TouchableOpacity>
              <Ionicons name="attach" size={24} color="#C8D4DF" />
            </TouchableOpacity>

            {/* ==================================> ** TYPE HERE ** <================================== */}
            <TextInput
              style={styles._text_input}
              placeholder="Type a Message..."
              placeholderTextColor="#C1C0C8"
            />

            {/* ==================================> ** VOICE ** <================================== */}
            <TouchableOpacity>
              <MaterialIcons name="keyboard-voice" size={24} color="#C8D4DF" />
            </TouchableOpacity>

            {/* ==================================> ** SEND BUTTON ** <================================== */}
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="send" size={24} color="#323643" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _header_main: {
    backgroundColor: "#33CC66",
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  _back_icon_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  _message_list_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  _message_list_profile_main: {
    width: "20%",
    // backgroundColor: "red",
    alignItems: "center",
  },
  _message_list_message_main: {
    width: "80%",
  },

  chat_profile_image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  _active: {
    width: 10,
    height: 10,
    backgroundColor: "#80EA4E",
    borderRadius: 10 /2,
    marginTop: -15,
    marginLeft: 35,
    borderWidth: 2,
    borderColor: "white",
    overflow:"hidden"
  },
  _message_receive_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _receive_message_user_profile_main: {
    width: "15%",
  },
  _receive_message_user_message_main: {
    backgroundColor: "#EEEEF9",
    width: "65%",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },
  _receive_message_user_message_time_main: {
    width: "20%",
    paddingLeft: 5,
  },
  text_message_main: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    elevation: 2,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  _text_input: {
    height: 40,
    width: "65%",
    fontSize: 14,
    marginLeft: 10,
  },
  receive_message_profile_image: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  _receive_message_text: {
    color: "#323643",
    fontSize: 14,
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  _receive_message_time: {
    fontSize: 9,
    color: "#989BA5",
    marginLeft: 10,
  },
  _message_send_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _send_message_user_message_main: {
    backgroundColor: "#33CC66",
    width: "80%",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  _send_message_user_message_time_main: {
    width: "20%",
    paddingLeft: 5,
  },
  _send_message_text: {
    color: "white",
    fontSize: 14,
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  _just_message: {
    fontSize: 14,
    color: "#AEB5C0",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    marginTop: 20
  }
});

export default MessageDetails;
