import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import { TextInput } from "react-native";
 

export default function EmailPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackIcon path="Goals" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>On y est presque !</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Email" />
          <TextInput style={styles.textInput} placeholder="Mot de passe" />
        </View>
      </View>
      <SliderBar slide={10} path="ValidationRegister" navigation={navigation} text='Suivant' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  centerContainer: {
    marginTop: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    height: "35%",
},
questionText: {
    fontSize: 22,
},
inputContainer: {
    width: '85%',
    height: '60%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  textInput: {
    padding: 13,
    borderBottomWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 17
  },
});
