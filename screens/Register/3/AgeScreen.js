import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";
import Slider from "@react-native-community/slider";
import debounce from 'lodash/debounce';

// redux

import { useDispatch } from 'react-redux';
import { setAge } from "../../../redux/actions";

export default function AgeScreen({ navigation }) {

  const dispatch = useDispatch();

  const [localAge, setLocalAge] = useState(25)

  const onValueChangeDebounced = debounce((newValue) => {
    setLocalAge(newValue)
    dispatch(setAge(newValue))
  }, 1);

  return (
    <View style={styles.container}>
      <BackIcon path="Sexe" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>Quel âge avez-vous ?</Text>
        <View style={styles.sliderContainer}>
          <Text style={{fontSize: 25}}>{localAge}</Text>
          <Slider
            style={styles.slider}
            minimumValue={8}
            maximumValue={120}
            minimumTrackTintColor="skyblue"
            maximumTrackTintColor="orange"
            thumbTintColor="white"
            step={1}
            onValueChange={onValueChangeDebounced}
            value={localAge}
          />
        </View>
      </View>
      <SliderBar slide={3} path="Size" navigation={navigation} text='Suivant' />
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
    height: "25%",
    display: "flex",
    justifyContent: "space-between",
  },
  questionText: {
    fontSize: 22,
    textAlign: "center",
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40%'
  },
  slider: {
    width: 300,
  },
});
