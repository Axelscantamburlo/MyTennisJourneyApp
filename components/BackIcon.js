import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function BackIcon({ path, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(`${path}`)} activeOpacity={1}  style={styles.icon}>
      <Icon
        name="chevron-left"
        size={45}
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