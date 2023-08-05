import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import BackIcon from '../../components/BackIcon'
import Icon from 'react-native-vector-icons/Feather'

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
        navigation.navigate("ValidationLoader", { text: 'Connexion validée', path: 'NavBar' })
      })
      .catch((error) => {

        showErrorMessage(error.code)
      });
  }

  const [errorMessage, setErrorMessage] = useState('')

  const showErrorMessage = (error) => {
    if (error === 'auth/invalid-email') {
      setErrorMessage('Format d\'email invalide')
    } else if (error === 'auth/user-not-found') {
      setErrorMessage('Email invalide')
    } else if (error === 'auth/wrong-password') {
      setErrorMessage('Mot de passe invalide')
    } else {
      setErrorMessage('Une erreur s\'est produite')
    }
  }

  const navigateToResetPassword = () => {
    navigation.navigate("PasswordReset", { email: email })
    setErrorMessage('')
  }

  const [hidePassword, setHidePassword] = useState(true)

  return (
    <View style={styles.container}>
      <BackIcon path={'Welcome'} navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Content de vous revoir !</Text>
        <View style={styles.inputContainer}>
          <TextInput autoCapitalize='none' style={styles.textInput} autoCorrect={false} placeholder="Email" name='email' value={email} onChangeText={(text) => handleInputsChange('email', text)} />
          <View style={{
            flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between'
          }}>
            <TextInput style={[styles.textInput, { width: "90%", borderBottomWidth: 0 }]} autoCorrect={false} placeholder="Mot de passe" secureTextEntry={hidePassword} onChangeText={(text) => handleInputsChange('password', text)} />
            {password && (
              <TouchableOpacity activeOpacity={0.5} style={styles.lockBtn} onPress={() => setHidePassword(!hidePassword)}>
                <Icon color='grey' size={22} name={hidePassword ? 'lock' : 'unlock'} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TouchableHighlight style={styles.forgotPassword} underlayColor='transparent' activeOpacity={0.3} onPress={() => navigateToResetPassword()}>
        <Text style={{ color: "#6184D8", fontSize: 16 }}>Mot de passe oublié</Text>
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

  },
  lockBtn: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 10,
    transform: [{ translateX: -15 }]
  }
})


