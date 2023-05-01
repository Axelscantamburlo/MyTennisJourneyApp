import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function SliderBar({ slide, path, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.sliderBar}>
        <Text style={slide === 1 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 2 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 3 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 4 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 5 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 6 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 7 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 8 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 9 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 10 ? styles.actualCircle : styles.circle}></Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => navigation.navigate(`${path}`)}>
        <Text style={{ fontSize: 20, color: "white" }}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: 57,
    width: "100%",
  },
  sliderBar: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  circle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 19,
    height: 19,
    margin: 7.5,
  },
  actualCircle: {
    backgroundColor: "orange",
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 19,
    height: 19,
    margin: 7.5,
  },

  button: {
    backgroundColor: "orange",
    width: "88%",
    display: "flex",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
});