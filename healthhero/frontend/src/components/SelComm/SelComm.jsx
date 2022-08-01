import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuthContext } from "../../../AuthContext/auth";
import { CommForm } from "../CommForm/Commform";
import "./SelComm.css";

export default function SelComm() {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
  };
  return (
    <div>
      <div id="greenb">
        <h1>Select your Community</h1>
        <View div="screen">
          <TouchableOpacity onPress={buttonClickedHandler} div="roundButton1">
            <Text>example community</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton2}
          >
            <Text>I'm another button</Text>
          </TouchableOpacity>
        </View>
        );
      </div>
    </div>
  );
}
