import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";


// redux

import { useSelector } from 'react-redux';
import { setName } from "../../../redux/actions";


export default function NameScreen({ navigation }) {

  const { name } = useSelector((state) => state.user);

  const [localName, setLocalName] = useState('')

  useEffect(() => {
    setLocalName(name)
  }, [])

  return (
    <View style={styles.container}>
      <BackIcon path="Welcome" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>Quel est votre prénom ?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Prénom"
          onChangeText={(value) => setLocalName(value)}
          value={localName}
        />
      </View>
      <SliderBar slide={1} path="Sexe" navigation={navigation} text="Suivant" value={localName} setValue={setName} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  centerContainer: {
    marginTop: 110,
    height: "25%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    padding: 13,
    borderBottomWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 17,
    width: "85%",
  },
  questionText: {
    fontSize: 22,
    textAlign: "center",
  },
});
