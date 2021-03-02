import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
export default function Setting(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#33CC66" translucent={true} />

            {/* >>>>>>>>>>>>>>>>> HEADER <<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main_view}>
                <View style={styles._heading_icons_main}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles._heading_text}>Settings</Text>
                    <Text style={{ color: "#33CC66" }}>Search</Text>
                </View>
            </View>

            {/* >>>>>>>>>>>>>>>>> BODY <<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <Text style={styles._setting_heading_text}>General</Text>
                <TouchableOpacity style={styles._main}>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Push Notification</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6F8BA4" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles._main}>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Blocked Users</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6F8BA4" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles._main}>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Language</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6F8BA4" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles._main}
                    onPress={() => props.navigation.navigate("History")}>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Report A Problem</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6F8BA4" />
                    </View>
                </TouchableOpacity>
                <Text style={styles._setting_heading_text}>Support</Text>
                <TouchableOpacity style={styles._main}>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Terms & Policy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles._main}>
                    <View style={styles._heading}>
                        <Text style={styles._logout}>Log Out</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginBottom: 100 }}></View>
            </ScrollView>
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
    },

    _heading: {
        width: "80%",
    },
    _toglebtn: {
        width: "10%",
        alignSelf: "center",
        alignItems: "center"
    },
    _main: {
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    _setting_heading: {
        color: "#6F8BA4",
        letterSpacing: 1
    },
    _setting_heading_text: {
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 30,
        letterSpacing: 1,
        color: "#3B566E",
        fontSize: 16
    },
    _logout: {
        color: "#E53D53",
        letterSpacing: 1

    }

});