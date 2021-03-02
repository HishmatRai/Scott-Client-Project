import React,{useState} from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLoading } from "expo";

const {height } = Dimensions.get("window");

export default function IntroScreens(props) {
const [activeslide,setActiveslide] = useState(0)


  const slides = [
    {
      key: 1,
      title: "Welcome",
      text: "Meet people based on places they are located follow places to see more post and meet more people. ",
      image: require("./../../images/welcome1.png"),
    },
    {
      key: 2,
      title: "Hair Stylists",
      text: "Get the best Hair Stylists in town, great services near you!",
      image: require("./../../images/welcome1.png"),
    },
    {
      key: 3,
      title: "Eye Lashes",
      text: "Get the best Lash artists in town, great services near you!",
      image: require("./../../images/welcome1.png"),
    },
  ];

  


    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="light" />
<View style={styles.viewContainer}>
        <View style={styles.slider}>
          <ImageBackground
            source={slides[activeslide].image}
            style={styles.imageInfo}
          ></ImageBackground>
        </View>

        <View style={styles._dotted_row}>
        <View style={activeslide === 0 ? styles._active_dot:styles._dot }></View>
        <View style={activeslide === 1 ? styles._active_dot:styles._dot }></View>
        <View style={activeslide === 2 ? styles._active_dot:styles._dot }></View>
      </View>
        <View style={styles.footer}>
          <Text
            style={[styles.hairWords]}
          >
            {slides[activeslide].title}
          </Text>

          <Text
            style={[styles.hairDetails]}
          >
            {slides[activeslide].text}
          </Text>
        </View>
      </View>



<View style={{flexDirection:"row",justifyContent:"space-around"}}>
{activeslide !== 2 ?
      <TouchableOpacity style={styles._signup_view} onPress={()=>setActiveslide(activeslide+1)}>
        {/* <LinearGradient
          colors={["rgb(187,86,232)", "rgb(132,37,174)"]}
          style={styles._signup}
        > */}
          <Text style={styles.title}>Next</Text>
        {/* </LinearGradient> */}
      </TouchableOpacity>:


      <TouchableOpacity
        style={styles._signup_view}
        onPress={() => props.navigation.navigate("Login")}
      >
        <LinearGradient
          colors={["rgb(187,86,232)", "rgb(132,37,174)"]}
          style={styles._signup}
        >
          <Text style={styles.title}>Finish</Text>
        </LinearGradient>
      </TouchableOpacity>
  }

        <TouchableOpacity
          style={styles._skipView}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles._skip}>skip</Text>
        </TouchableOpacity>
</View>
      </View>
    );
  
}
const styles = StyleSheet.create({
  _skip: {
    textAlign: "center",
    marginBottom: 17,
    color: "rgb(186, 184, 184)",
    borderBottomWidth: 1,
    fontSize: 12,
    borderBottomColor: "grey",
    fontWeight: "bold",
  },
  _skipView: {
    width: 26,
    alignSelf: "center",
    marginTop:10
  },

  viewContainer: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 42,
    paddingBottom:0,
  },
  slider: {
    height: 0.48 * height,
    backgroundColor: "white",
    marginTop:20,
    width: "90%",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:20

  },
  imageInfo: {
    width: "100%",
    flex: 1,
  },
  logoStyle: {
    width: 55,
    height: 50,
  },
  textoutfitr: {
    width: 55,
    height: 30,
    marginVertical: 3,
    marginBottom: 18,
    fontSize: 20,
    letterSpacing: -0.24,
    lineHeight: 24,
  },

  hairWords: {
    height: 40.5,
    fontSize: 25.5,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 25.5,
    letterSpacing: 0,
    textAlign: "center",
    color: "#0c0d34",
    marginTop:-50
  },
  hairDetails: {
    textAlign: "center",
    lineHeight: 25,
    letterSpacing: 0,
    // width: 400,
    fontSize: 15,
    // paddingHorizontal:28,
    // marginBottom: 90,
  },

  title: {
    fontSize: 15.5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 11,
    letterSpacing: 0,
    fontStyle: "normal",
    paddingTop: 5,
  },
  _signup: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 25,
    width: "70%",
    alignSelf: "center",
    padding: 18,
    marginTop: 10,
  },
  _dotted_row:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:15
  },
  _dot:{
height:10,
width:10,
borderRadius:5,
marginHorizontal:5,
backgroundColor:"rgba(51,204,102,0.45)"
  },
  _active_dot:{
    height:10,
width:10,
borderRadius:5,
marginHorizontal:5,
backgroundColor:"#33CC66"
  },
  _signup_view:{
      backgroundColor:"#33CC66",
    width: "25%",
    // alignItems:"center",
    justifyContent:"flex-end",
    paddingBottom:8,
    paddingTop:8,
    borderRadius:20,
    marginLeft: "70%",
    marginBottom:10
    
  }
});
