import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";
import Slider from "@react-native-community/slider";
import debounce from 'lodash/debounce';


export default function AgeScreen({ navigation }) {

  const [age, setAge] = useState(25)

  const onValueChangeDebounced = debounce((newValue) => {
    setAge(newValue);
  }, 1);

  return (
    <View style={styles.container}>
      <BackIcon path="Sexe" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>Quel âge avez-vous ?</Text>
        <View style={styles.sliderContainer}>
          <Text style={{fontSize: 25}}>{age}</Text>
          <Slider
            style={styles.slider}
            minimumValue={8}
            maximumValue={120}
            minimumTrackTintColor="skyblue"
            maximumTrackTintColor="orange"
            thumbTintColor="white"
            step={1}
            value={age}
            onValueChange={onValueChangeDebounced}
          />
        </View>
      </View>
      <SliderBar slide={3} path="Size" navigation={navigation} />
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
    height: "25%",
    display: "flex",
    justifyContent: "space-between",
  },
  questionText: {
    fontSize: 23,
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
