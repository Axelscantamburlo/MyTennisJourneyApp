import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";

// redux
import { useSelector } from 'react-redux';
import { setLevelPlayeur } from "../../../redux/actions";

export default function LevelPlayerScreen({ navigation }) {

  const { levelPlayeur } = useSelector((state) => state.user);

  const [toggleButton, setToggleButton] = useState(0);

  const [text, setText] = useState("");

  const [localLevel, setLocalLevel] = useState('')

  const levelTexts = {
    Débutant: "Vous jouez de temps en temps et faites quelques matches dans l'année",
    Intermédiaire: "Vous prenez des cours en club et faites quelques tournois autour de chez vous",
    Confirmé: "Vous vous entraînez très régulièrement et jouez souvent en tournois dans votre région",
    Expert: "Votre entraînement est quotidien et complet et vous faites des tournois partout en France, voire même à l'étranger"
  };

  useEffect(() => {
    setToggleButton(['Débutant', 'Intermédiaire', 'Confirmé', 'Expert'].indexOf(levelPlayeur) + 1);
    setText(levelTexts[levelPlayeur]);
    setLocalLevel(levelPlayeur)
  }, []);


  const toggleStyleButton = (number, value) => {
    setToggleButton(prevNumber => prevNumber === number ? 0 : number);
    setLocalLevel(prevLevel => prevLevel === value ? '' : value);
    setText(prevText => prevText === levelTexts[value] ? '' : levelTexts[value]);
  };
  return (
    <View style={styles.container}>
      <BackIcon path="Weight" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>Quel est votre niveau</Text>
          <Text style={styles.questionText}>tennistique ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 1 && { backgroundColor: "red" },
            ])}
            activeOpacity={1}
            onPress={() => toggleStyleButton(1, "Débutant")}
          >
            <Text style={styles.buttonText}>Débutant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 2 && { backgroundColor: "red" },
            ])}
            activeOpacity={1}
            onPress={() => toggleStyleButton(2, "Intermédiaire")}
          >
            <Text style={styles.buttonText}>Intermédiaire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 3 && { backgroundColor: "red" },
            ])}
            activeOpacity={1}
            onPress={() => toggleStyleButton(3, "Confirmé")}
          >
            <Text style={styles.buttonText}>Confirmé</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 4 && { backgroundColor: "red" },
            ])}
            activeOpacity={1}
            onPress={() => toggleStyleButton(4, "Expert")}
          >
            <Text style={styles.buttonText}>Expert</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View >
        <Text style={styles.text}>{text}</Text>
      </View>
      <SliderBar slide={6} path="Ranking" navigation={navigation} text='Suivant' value={localLevel} setValue={setLevelPlayeur} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  centerContainer: {
    marginTop: 110,
    width: "100%",
    height: "55%",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  questionText: {
    textAlign: "center",
    fontSize: 22,
  },
  buttonContainer: {
    width: "85%",
    height: '90%',
  },
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    marginTop: 23,
    marginBottom: 23,
    padding: 17
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    marginTop: 23,
    fontSize: 15,
    maxWidth: '90%'
  }
});
