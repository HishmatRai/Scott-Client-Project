import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Search(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#33CC66" translucent={true} />

            {/* >>>>>>>>>>>>>>>>> HEADER <<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main_view}>
                <View style={styles._heading_icons_main}>
                    <TouchableOpacity>
                        <Entypo name="cross" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles._heading_text}>Search</Text>
                    <Text style={{ color: "#33CC66" }}>Search</Text>
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <View style={styles._search_main_view}>
                    <Ionicons name="search-circle-sharp" size={24} color="#C1C0C8" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={styles._textInput}
                        placeholder="Search"
                        placeholderTextColor="#C1C0C8"
                    />
                </View>
                <View style={styles._search_history_main}>
                    <Text style={styles._recent_serarch}>Recent Search</Text>
                    <TouchableOpacity>
                        <Text style={styles._clear_all_btn_txt}>Clear All</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* >>>>>>>>>>>>>>>>> BODY <<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <View style={styles._main}>
                        <View style={styles._icons_main}>
                            <View style={styles.Profile_img}>
                                <Ionicons name="chatbubbles" size={24} color="white" />
                            </View>
                        </View>
                        <View style={styles._heading}>
                            <Text style={styles._setting_heading}>Jarvis Pepperspray</Text>
                            <Text>5 mutual friends</Text>
                        </View>
                        <View style={styles._toglebtn}>
                            <TouchableOpacity style={styles._following_btn}>
                                <Text style={styles._following_btn_text}>Following</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 100 }}></View>
                </View>
            </ScrollView>
            {/* >>>>>>>>>>>>>>>>>>>> Tab bar <<<<<<<<<<<<<<<<<< */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    _header_main_view: {
        backgroundColor: "#33CC66",
    },
    _heading_icons_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    _heading_text: {
        color: "white",
        fontSize: 23,
        fontWeight: 'bold',
        letterSpacing: 1

    },
    _search_main_view: {
        flexDirection: "row",
        backgroundColor: "rgba(242,245,248,0.45)",
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
    },
    _textInput: {
        width: "85%",
        color: "#C1C0C8",
        marginLeft: 10,
        fontWeight: "bold",
        letterSpacing: 1,

    },
    _cross_icon: {
        justifyContent: "flex-end"
    },

    _tapbar_main: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        borderTopColor: "gray",
        borderTopWidth: 1,
        backgroundColor: "white"
    },
    _bottom_icons: {
        padding: 10,
    },
    _icons_main: {
        width: "20%",
        // backgroundColor: "red"
    },
    _heading: {
        width: "50%",
        // backgroundColor: "green"
    },
    _toglebtn: {
        width: "30%",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "blue"
    },
    _main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    _icons_box: {
        borderRadius: 100,
        backgroundColor: "#707070",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box2: {
        borderRadius: 100,
        backgroundColor: "#2CB9B0",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    Profile_img: {
        borderRadius: 100,
        backgroundColor: "#5672FF",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box4: {
        borderRadius: 100,
        backgroundColor: "#FF568A",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box5: {
        borderRadius: 100,
        backgroundColor: "#8C61C5",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box6: {
        borderRadius: 100,
        backgroundColor: "#4682B4",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box7: {
        borderRadius: 100,
        backgroundColor: "#FFC041",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box8: {
        borderRadius: 100,
        backgroundColor: "#FF6E6E",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_heading: {
        color: "#707070",
        fontWeight: 'bold'
    },
    _setting_heading2: {
        color: "#FF6E6E",
        fontWeight: 'bold'
    },
    _search_history_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30
    },
    _recent_serarch: {
        color: "#3B566E",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 15
    },
    _clear_all_btn_txt: {
        color: "#33CC66",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 15
    },
    _following_btn:{
        backgroundColor:"#33CC66",
        alignItems:"center",
        padding:10,
        borderRadius:20
    },
    _following_btn_text:{
        color:"white",
        fontWeight:"bold",
        letterSpacing:2,
        fontSize:13

    }

});