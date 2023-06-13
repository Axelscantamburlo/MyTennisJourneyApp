import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import { TextInput } from "react-native";



// // redux

import {  useSelector } from 'react-redux';
import { setEmailPassword } from "../../../redux/actions";

export default function EmailPasswordScreen({ navigation }) {

  const { emailPassword } = useSelector((state) => state.user);

  const [localEmailPassword, setLocalEmailPassword] = useState({
    email: '',
    password: ''
  })

  const handleInputsChange = (inputChange, text) => {
    setLocalEmailPassword({...localEmailPassword, [inputChange]: text})
  }

  
  useEffect(() => {
    setLocalEmailPassword(emailPassword)
  }, [])


  return (
    <View style={styles.container}>
      <BackIcon path="Goals" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>On y est presque !</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Email" name='email' value={localEmailPassword.email} onChangeText={(text) => handleInputsChange('email', text)} />
          <TextInput style={styles.textInput} placeholder="Mot de passe" value={localEmailPassword.password} onChangeText={(text) => handleInputsChange('password', text)}/>
        </View>
      </View>
      <SliderBar slide={10} path="ValidationRegister" navigation={navigation} text='Suivant' value={localEmailPassword} setValue={setEmailPassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  centerContainer: {
    marginTop: 110,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "35%",
  },
  questionText: {
    fontSize: 22,
  },
  inputContainer: {
    width: "85%",
    height: "60%",
    display: "flex",
    justifyContent: "space-between",
  },
  textInput: {
    padding: 13,
    borderBottomWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 17,
  },
});
