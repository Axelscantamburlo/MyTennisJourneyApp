import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";


// redux

import { useDispatch } from 'react-redux';

// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../config/firebase_config'
import { setDoc, doc, collection } from "firebase/firestore";



export default function SliderBar({ slide, path, navigation, text, value, setValue, store }) {
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch();

  const handlePress = () => {

    if (value !== "" && slide !== 10 && slide !== 11) {

      dispatch(setValue(value))
      navigation.navigate(`${path}`)
      resetErrorMessage()
    } else if (slide === 10) {
      chekIfEmailAndPasswordAreGood()
    } else if (slide === 11) {
      registerUser()
    }
    else {
      setErrorMessage('Veuillez indiquer votre niveau')
    }

    if (Array.isArray(value) && value.length !== 1) {
      const filterItem = value.filter(item => item !== "")
      dispatch(setValue(filterItem))
    }
  }

  const resetErrorMessage = () => {
    setErrorMessage('')
  }
  // Check email and password
  const chekIfEmailAndPasswordAreGood = () => {
    const { email, password } = value

    if (!email || !password) {
      setErrorMessage("Veuillez compléter tous les champs")
      return;
    } else if (!isValidEmail(email)) {
      setErrorMessage("Veuillez saisir un email valide")
      return;
    } else if (!isValidPassword(password)) {
      setErrorMessage("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un caractères spécial")
      return;
    } else {
      dispatch(setValue(value))
      navigation.navigate(`${path}`)
      resetErrorMessage()
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.,?])[a-zA-Z\d!@#$%^&*.,?]{8,16}$/;

    return passwordRegex.test(password)
  }

  ////////////////////
  // take all the redux store

  const registerUser = async () => {
    const { email, password } = store.emailPassword
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      const userId = user.uid
      const useRef = doc(db, 'users', userId);

      await setDoc(useRef, {
        ...store
      })
      navigation.navigate(`${path}`, { text: 'Votre inscription a bien été validée' })

    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        navigation.navigate("EmailPassword", { message: 'Email déjà utilisé' })
      } else if (err.code === "auth/invalid-email") {
        navigation.navigate("EmailPassword", { message: 'Veuillez saisir un email valide' })

      } else {
        navigation.navigate("EmailPassword", { message: "Une ereur s'est produite" })
      }
    }

  }


  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', marginBottom: 5, fontSize: 15 }}>{errorMessage}</Text>
      <View style={styles.sliderBar}>
        <Text style={slide === 1 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 2 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 3 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 4 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 5 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 6 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 7 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 8 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 9 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
        <Text style={slide === 10 || slide === 11 ? styles.actualCircle : styles.circle}></Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => handlePress()}>
        <Text style={{ fontSize: 20, color: "white" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: Platform.OS == 'ios' ? 40 : 20,
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





//DONE: NORMALEMENT TOUT EST PLUS OU MOINS GERE DANS LE SIGN IN ET LE REGISTER
// TODO: COMMENCER LA HOME PAGE