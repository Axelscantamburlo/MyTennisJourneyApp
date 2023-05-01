import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";

export default function NameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackIcon path="Welcome" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>Quel est votre prénom ?</Text>
        <TextInput style={styles.input} placeholder="Prénom" />
      </View>
      <SliderBar slide={1} path="Sexe" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  centerContainer: {
    marginTop: 120,
    height: "25%",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: "85%",
    padding: 17,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 20
  },
  questionText: {
    fontSize: 23,
    textAlign: "center",
  },
});
