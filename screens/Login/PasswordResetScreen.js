import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import BackIcon from '../../components/BackIcon'

//FIREBASE
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../config/firebase_config'

export default function PasswordResetScreen({ navigation }) {
  const [email, setEmail] = useState('')

  const [errorMessage, setErrorMessage] = useState('')


  const handlePress = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('password sent');
      })
      .catch((error) => {
        showErrorMessage(error.code)

      });
  }

  const showErrorMessage = (error) => {
    if (error === 'auth/missing-email') {
      setErrorMessage("Veuillez entrer un email")
    } else if (error === 'auth/invalid-email') {
      setErrorMessage("Email invalide")
    } else if(error === 'auth/user-not-found') {
      setErrorMessage("L'email entré correspond à aucun compte")
    } else {
      setErrorMessage("Une erreur s'est produite")
    }
  }

  return (
    <View style={styles.container}>
      <BackIcon path={'Login'} navigation={navigation} />

      <View style={styles.centerContainer}>
        <Text style={styles.text}>Réinisialiser le mot de passe</Text>
        <TextInput style={styles.textInput} autoCorrect={false} placeholder="Email" name='email' onChangeText={(text) => setEmail(text)} />
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => handlePress()}>
        <Text style={{ fontSize: 20, color: "white" }}>Envoyer un email</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  centerContainer: {
    marginTop: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "25%",
    width: '85%'
  },
  text: {
    fontSize: 22,
  },
  textInput: {
    padding: 13,
    borderBottomWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 17,
    width: "100%",
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
    bottom: Platform.OS == 'ios' ? 110 : 90,
  },
})