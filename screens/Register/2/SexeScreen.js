import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";

// redux

import { useDispatch, useSelector } from 'react-redux';
import { setSexe } from "../../../redux/actions";

export default function SexeScreen({ navigation }) {

  const { name} = useSelector((state) => state.user);


  const dispatch = useDispatch();

  const [toggleButton, setToggleButton] = useState(0);

  useEffect(() => {
    setToggleButton(0);
  }, []);

  const toggleStyleButton = (number, value) => {
    setToggleButton(number);
    dispatch(setSexe(value))
  };

  return (
    <View style={styles.container}>
      <BackIcon path="Name" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>Bonjour {name},</Text>
          <Text style={styles.questionText}>quel est votre sexe ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 1 && { backgroundColor: "red" },
            ])}
            onPress={() => toggleStyleButton(1, 'Homme')}
          >
            <Text style={styles.buttonText}>Homme</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={StyleSheet.flatten([
              styles.button,
              toggleButton === 2 && { backgroundColor: "red" },
            ])}
            onPress={() => toggleStyleButton(2, 'Femme')}
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
    marginTop: 110,
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
