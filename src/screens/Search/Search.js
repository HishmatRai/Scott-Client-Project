import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
export default function Search(props) {
    let RecentSerach = [
        { userPofile: "", userName: "Jarvis Pepperspray", mutualFriend: "5 mutual friends", buttonValue: "Following" },
        { userPofile: "", userName: "Texas", mutualFriend: "100k followers", buttonValue: "Follow" },
        { userPofile: "", userName: "Italy", mutualFriend: "900k followers", buttonValue: "Follow" },
        { userPofile: "", userName: "Druid Wensleydale", mutualFriend: "7 mutual friends", buttonValue: "Following" },
        { userPofile: "", userName: "Parsley Montana", mutualFriend: "2 mutual friends", buttonValue: "Following" },
        { userPofile: "", userName: "Linguina Nettlewater", mutualFriend: "12 mutual friends", buttonValue: "Follow" },
        { userPofile: "", userName: "Carnegie Mondover", mutualFriend: "5 mutual friends", buttonValue: "Following" },

    ]
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#33CC66" translucent={true} />

            {/* >>>>>>>>>>>>>>>>> HEADER <<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main_view}>
                <View style={styles._heading_icons_main}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
                    {RecentSerach.map((v, i) => {
                        return (
                            <View style={styles._main}>
                                <View style={styles._icons_main}>
                                    <View style={styles.Profile_img}>
                                        <Image source={require('./../../images/Mask.png')} style={styles._profile} />
                                    </View>
                                </View>
                                <View style={styles._heading}>
                                    <Text style={styles._setting_heading}>{v.userName}</Text>
                                    <Text style={styles._mutal_frnd}>{v.mutualFriend}</Text>
                                </View>
                                <View style={styles._toglebtn}>
                                    <TouchableOpacity style={[v.buttonValue === "Following" ? styles._following_btn : styles._follow_btn]}>
                                        <Text style={[v.buttonValue === "Following" ? styles._following_btn_text : styles._follow_btn_text]}>

                                            {v.buttonValue}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}

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
    _icons_main: {
        width: "10%",
    },
    _heading: {
        width: "45%",
    },
    _toglebtn: {
        width: "35%",
        alignItems: "center"
    },
    _main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },
    Profile_img: {
        borderRadius: 100,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    _profile: {
        width: 40,
        height: 40,
        alignItems: "center",
        borderRadius: 100,

    },

    _setting_heading: {
        color: "#6F8BA4",
        fontWeight: 'bold',
        letterSpacing: 1
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
    _following_btn: {
        backgroundColor: "#33CC66",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 20,
        width: 110
    },
    _following_btn_text: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2,
        fontSize: 13

    },
    _mutal_frnd: {
        color: "#C8D4DF",
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    _follow_btn_text: {
        color: "#33CC66",
        fontWeight: "bold",
        letterSpacing: 2,
        fontSize: 13

    },
    _follow_btn: {
        borderColor: "#33CC66",
        borderWidth: 1,
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 20,
        width: 110
    },

});