import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props && this.props.onpress.navigate(this.props.screenName)}
        style={{ width: this.props.size, alignSelf: "center", backgroundColor: "#3284FF", padding: 10, borderRadius: 20 }}>
        <Text style={{ color: "white", textAlign: "center" }}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#3284FF'
  },
});

export default Button;
