import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import { TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

// // redux

import { useSelector } from 'react-redux';
import { setEmailPassword } from "../../../redux/actions";

export default function EmailPasswordScreen({ navigation, route }) {

  const { emailPassword } = useSelector((state) => state.user);

  const [localEmailPassword, setLocalEmailPassword] = useState({
    email: '',
    password: ''
  })

  const {email, password} = localEmailPassword

  const handleInputsChange = (inputToChange, text) => {
    setLocalEmailPassword({ ...localEmailPassword, [inputToChange]: text })
  }

  const [errorMessage, setErrorMessage] = useState('')


  useEffect(() => {
    setLocalEmailPassword(emailPassword);

  }, [emailPassword]);

  useEffect(() => {
    if (route.params && route.params.message) {
      setErrorMessage(route.params.message);
    }
  }, [route.params])

  useEffect(() => {
    setErrorMessage('')
  }, [localEmailPassword])


  const [hidePassword, setHidePassword] = useState(true)


  return (
    <View style={styles.container}>
      <BackIcon path="Goals" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>On y est presque !</Text>
        <View style={styles.inputContainer}>
          <TextInput autoCapitalize='none' style={styles.textInput} autoCorrect={false} placeholder="Email" name='email' value={email} onChangeText={(text) => handleInputsChange('email', text)} />

          <View style={{
            flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between'
          }}>
            <TextInput style={[styles.textInput, { width: "90%", borderBottomWidth: 0 }]} secureTextEntry={hidePassword ? true : false}  autoCorrect={false} placeholder="Mot de passe" value={localEmailPassword.password} onChangeText={(text) => handleInputsChange('password', text)} />

            {password && (
              <TouchableOpacity activeOpacity={0.5} style={styles.lockBtn} onPress={() => setHidePassword(!hidePassword)}>
                <Icon color='grey' size={22} name={hidePassword ? 'lock' : 'unlock'} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
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
  errorMessage: {
    position: 'absolute',
    bottom: 150,
    width: "100%",
    textAlign: 'center',
    fontSize: 15,
    color: 'red'
  },
  lockBtn: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 10,
    transform: [{ translateX: -15 }]
  }
});
