import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, TouchableHighlight } from 'react-native'
import React from 'react'
import BackIcon from '../../components/BackIcon'
import { useState } from 'react'

// FIREBASE

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase_config'


export default function Login({ navigation }) {

  const [emailPassword, setEmailPassword] = useState({
    email: '',
    password: ''
  })

  const handleInputsChange = (inputToChange, text) => {
    setEmailPassword({ ...emailPassword, [inputToChange]: text })
  }

  const { email, password } = emailPassword

  const handlePress = () => {
    if (!email || !password) {
      return setErrorMessage('Veuillez compléter tous les champs')
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("ValidationLoader", { text: 'Connexion validée' })
      })
      .catch((error) => {
        showErrorMessage(error.code)
      });
  }

  const [errorMessage, setErrorMessage] = useState('')

  const showErrorMessage = (error) => {
    if (error === 'auth/invalid-email') {
      setErrorMessage('Email invalide')
    } else if (error === 'auth/wrong-password') {
      setErrorMessage('Mot de passe invalide')
    } else {
      setErrorMessage(`${error.code}`)
    }
  }

  return (
    <View style={styles.container}>
      <BackIcon path={'Welcome'} navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Content de vous revoir !</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} autoCorrect={false} placeholder="Email" name='email' onChangeText={(text) => handleInputsChange('email', text)} />
          <TextInput style={styles.textInput} autoCorrect={false} placeholder="Mot de passe" onChangeText={(text) => handleInputsChange('password', text)} />
        </View>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TouchableHighlight style={styles.forgotPassword} underlayColor='transparent' activeOpacity={0.3} onPress={() => navigation.navigate("PasswordReset")}>
        <Text style={{color: "#6184D8", fontSize: 16}}>Mot de passe oublié</Text>
      </TouchableHighlight>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => handlePress()}>
        <Text style={{ fontSize: 20, color: "white" }}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: 'center'
  },
  centerContainer: {
    marginTop: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "35%",
    width: '85%'
  },
  text: {
    fontSize: 22,
  },
  inputContainer: {
    width: "100%",
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
  button: {
    backgroundColor: "orange",
    width: "88%",
    display: "flex",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? 40 : 20,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 5,
    fontSize: 15,
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? 130 : 110,
  },
  forgotPassword: {

    position: "absolute",
    bottom: Platform.OS == 'ios' ? 110 : 90,

  }
})


// VERIFIER QUE TOUT MARCHE: REGISTER AVEC LE  PASSWORD QUI SE CACHE DANS REDUX ET DANS FIREBASE (REFLECHIR SI ON AURA JAMAIS BESOIN DU MOT DE PASSE)
// VERIFIER LA PARTIE LOGIN AVEC LES MESSAGES D ERREUR AINSI QUE LE PasswordRestScreen.js
//MESSAGE D ERREUR A VERIFIER SUR EmailPAsswordScreen.js CAR LORSQUE ON ARRIVE DE ValidationRegisterScreen L ERREUR S AFFICHE BIEN MAIS NE S ENLEVE PAS EN CAS D AUTRE ERREUR
