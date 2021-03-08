import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    TouchableOpacity,
} from "react-native";

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CustomSidebarMenu = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*Top Large Image */}

            <View
                style={{
                    top: 60,
                    alignSelf: "center",
                    alignItems: "center"
                }}
            >
                <View style={styles._profile_main}>
                    <Image
                        source={require("./../images/drawerprofile.png")}
                        style={styles.sideMenuProfileIcon}
                    />
                </View>
                <View style={{ flexDirection: "column", top: 10 }}>
                    <Text style={styles.user_name}>Bailey Wonger</Text>
                    <Text style={styles.user_user_name}>@baileywonger</Text>
                </View>
            </View>

            {/* <DrawerContentScrollView showsVerticalScrollIndicator={false}> */}
            <View
                style={{
                    flex: 1,
                    paddingTop: 100,
                    marginLeft: "20%"
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginLeft: 40,
                        marginTop: 10
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            letterSpacing: 1,
                            fontWeight: "bold"
                        }}
                    >
                        Discover
          </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginLeft: 40,
                        marginTop: 10
                    }}
                    onPress={() => props.navigation.navigate("Message")}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            letterSpacing: 1,
                            fontWeight: "bold"
                        }}
                    >
                        Messages
          </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginLeft: 40,
                        marginTop: 10
                    }}
                    onPress={() => props.navigation.navigate("Profile")}
                >

                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            letterSpacing: 1,
                            fontWeight: "bold"
                        }}
                    >
                        Profile
          </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginLeft: 40,
                        marginTop: 10
                    }}
                    onPress={() => props.navigation.navigate("Notifications")}
                >

                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            letterSpacing: 1,
                            fontWeight: "bold"
                        }}
                    >
                        Notification
          </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginLeft: 40,
                        marginTop: 10
                    }}
                    
                >

                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            letterSpacing: 1,
                            fontWeight: "bold"
                        }}
                    >
                        Invite Friends
          </Text>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
          >
            Rate Us
          </Text>
          <Image
            source={{ uri: BASE_PATH + "star_filled.png" }}
            style={styles.iconStyle}
          />
        </View> */}
            <View style={{
                flexDirection: "row",
                margin: 20,
                alignItems: "center"
            }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        marginTop: "90%",
                        alignItems: "center"

                    }}
                    onPress={() => props.navigation.navigate("Setting")}
                >
                    <AntDesign name="setting" size={20} color="#80EA4E" />

                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            fontWeight: "bold",
                            letterSpacing: 1,
                            marginLeft: 10

                        }}
                    >
                        Settings
        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        marginTop: "90%",
                        alignItems: "center"
                    }}
                    onPress={() => props.navigation.navigate("LogIn")}
                >
                    <AntDesign name="logout" size={20} color="white" />
                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            fontWeight: "bold",
                            letterSpacing: 1,
                            marginLeft: 10
                        }}
                    >
                        Logout
        </Text>

                </TouchableOpacity>
            </View>
            {/* </DrawerContentScrollView> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        width: 90,
        height: 90,
        borderRadius: 20,
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 15,
    },
    _profile_main: {
        width: 96,
        height: 96,
        borderRadius: 50,
        borderColor: "#504DE5",
        borderWidth: 2,
        borderStyle: 'dashed',
        padding: 5,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    user_name: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 1
    },
    user_user_name: {
        fontSize: 12,
        color: "white",
        textAlign: "center",
        letterSpacing: 1


    }
});

export default CustomSidebarMenu;
