import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";

export default function LevelPlayerScreen({ navigation }) {
  const [toggleButton, setToggleButton] = useState(0);

  const [text, setText] = useState("");

  useEffect(() => {
    setToggleButton(0);
    setText('')
  }, []);

  const toggleStyleButton = (number) => {
    setToggleButton(number);

    if (number === 1) {
      setText(
        "Vous jouez de temps en temps et faites quelques matches dans l'année"
      );
    } else if (number === 2) {
      setText(
        "Vous prenez des cours en club et faites quelques tournois autour de chez vous"
      );
    } else if (number === 3) {
      setText(
        "Vous vous entrainez très régulièrement et joué souvent en tournois dans votre région"
      );
    } else if (number === 4) {
      setText(
        "Votre entrainement est quotidien et complet et faites des tournois partout en France voir même en dehors"
      );
    }
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
            onPress={() => toggleStyleButton(1)}
          >
            <Text style={styles.buttonText}>Débutant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 2 && { backgroundColor: "red" },
            ])}
            activeOpacity={1}
            onPress={() => toggleStyleButton(2)}
          >
            <Text style={styles.buttonText}>Intermédiaire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 3 && { backgroundColor: "red" },
            ])}
            activeOpacity={1}
            onPress={() => toggleStyleButton(3)}
          >
            <Text style={styles.buttonText}>Avancé</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 4 && { backgroundColor: "red" },
            ])}
            activeOpacity={1}
            onPress={() => toggleStyleButton(4)}
          >
            <Text style={styles.buttonText}>Expert</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View >
          <Text style={styles.text}>{text}</Text>
        </View>
      <SliderBar slide={6} path="Ranking" navigation={navigation} />
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
    marginTop: 120,
    width: "100%",
    height: "55%",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  questionText: {
    textAlign: "center",
    fontSize: 23,
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
