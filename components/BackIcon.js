import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function BackIcon({ path, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(`${path}`)} activeOpacity={1}  style={styles.icon}>
      <Icon
        name="navigate-before"
        size={55}
        color='orange'
      />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    icon :{
        position: "absolute",
        top: 40,
        left: 15
    },
   
})