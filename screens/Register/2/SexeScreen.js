import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";

export default function SexeScreen({ navigation }) {
  const [toggleButton, setToggleButton] = useState(0);

  useEffect(() => {
    setToggleButton(0);
  }, []);

  const toggleStyleButton = (number) => {
    setToggleButton(number);
  };

  return (
    <View style={styles.container}>
      <BackIcon path="Name" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>Bonjour Axel,</Text>
          <Text style={styles.questionText}>quel est votre sexe ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 1 && { backgroundColor: "red" },
            ])}
            onPress={() => toggleStyleButton(1)}
          >
            <Text style={styles.buttonText}>Homme</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 2 && { backgroundColor: "red" },
            ])}
            onPress={() => toggleStyleButton(2)}
          >
            <Text style={styles.buttonText}>Femme</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SliderBar slide={2} path="Age" navigation={navigation} text='Suivant' />
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
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 120,
    height: "45%",
  },
  questionText: {
    fontSize: 22,
    textAlign: "center",
  },
  buttonContainer: {
    width: "85%",
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    padding: 17,
    width: "100%",
    backgroundColor: "skyblue",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
  },
});
