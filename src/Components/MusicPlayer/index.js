import React, { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView, Image } from "react-native";
import styles from "./styles";
import AudioSlider from "./AudioSlider";
import AudioFile from './../../audio/counting.m4a';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Button from "./../../Components/button";

export default function MainScreen(props) {
  const [seemore, setseemore] = useState(props.draOpen);
  let pathnav = props.nav
  console.log("==================================>>>", pathnav)
  let musicData = [
    {
      name: "Tracked Out Files",
      active: true,
    },
    {
      name: "Untagged MP3 + WAV",
      active: true,
    },
    {
      name: "Paid Performances",
      active: true,
    },
    {
      name: "Used for 1 Music Video",
      active: true,
    },
    {
      name: "Radio Airplay",
      active: true,
    },
    {
      name: "Unlimited Streams",
      active: false,
    },
    {
      name: "YouTube Monetization",
      active: true,
    },
    {
      name: "Sell Unlimited Copies",
      active: true,
    },

    {
      name: "Upload to Spotify, Apple Music, iTunes, etc.",
      active: false,
    },
    {
      name: "Credit must be given “Prod by…”",
      active: false,
    },
  ];
  console.log(setseemore)
  return (
    <View>
      <View style={[styles._musicplayer, { backgroundColor: props.backgroundColor, borderBottomColor: props.borderColor, borderTopColor: props.borderColor }]}>
        {/* <View style={styles._music_inner_view}>
          <View style={styles._music_inner_view2}>

          <View style={styles._music_name}>

         

          <Text style={{ fontSize: 16,
    color: 'white',
    marginTop:-2,}}>
            Chill Beat{"  "}

          </Text>
            {props.type}
            {props.type2}
          </View>
          </View>

          {seemore ? (
            <TouchableOpacity onPress={() => setseemore(false)}>

              {props.close}
            </TouchableOpacity>
          ) : (
              <TouchableOpacity onPress={() => setseemore(true)}>
                {props.open}
              </TouchableOpacity>
            )}


        </View> */}
        {/* <View style={[styles._ownder_name,{marginTop:props.margintop}]}>
          <Image
            style={styles._google_icon}
            source={require('../../images/manpic.jpg')}
          />
          <Text style={styles._music_ownder}>@liamnamba</Text>
        </View> */}
        <AudioSlider audio={AudioFile} />
        {/* <<<DETAIL>>> */}
        {seemore ? (
          <View style={{}}>
            <View style={styles._row}>
              {musicData.map((val, i) => {
                return (
                  <View style={styles._data_row}>
                    {val.active ? (
                      <AntDesign
                        name="checkcircleo"
                        size={20}
                        color="#5EC041"
                        style={{ marginRight: 10 }}
                      />
                    ) : (
                        <AntDesign
                          name="closecircleo"
                          size={20}
                          color="#FF7171"
                          style={[
                            { marginRight: 10 },
                            val.active ? { opacity: 1 } : { opacity: 0.3 },
                          ]}
                        />
                      )}
                    <Text
                      style={[
                        styles._name,
                        val.active ? { opacity: 1 } : { opacity: 0.3 },
                      ]}
                    >
                      {val.name}
                    </Text>

                  </View>

                );
              })}
            </View>
            <View style={{ alignSelf: 'center', }}>
                <Button name={[props.buy, props.dolor,]} size={120} onpress={props.path} screenName={props.nav} />
              <TouchableOpacity onPress={()=>props.path.goBack()}><Text style={{ color: 'white', alignSelf: 'center',marginTop:10,marginBottom:20 }}>{props.cencel}</Text></TouchableOpacity>
            </View>
          </View>
        ) : null}

      </View>
    </View>
  );
}
