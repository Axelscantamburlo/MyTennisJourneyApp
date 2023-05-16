import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import Slider from "@react-native-community/slider";
import debounce from "lodash/debounce";

export default function SizeScreen({ navigation }) {
  const [size, setSize] = useState(175);

  const onValueChangeDebounced = debounce((newValue) => {
    setSize(newValue);
  }, 1);

  return (
    <View style={styles.container}>
      <BackIcon path="Age" navigation={navigation} />
      <View style={styles.centerContainer}>
        <Text style={styles.questionText}>Quelle taille faites-vous ?</Text>
        <View style={styles.sliderContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 25 }}>{size}</Text>
            <Text style={{ fontSize: 13, marginBottom: 3, marginLeft: 5 }}>
              cm
            </Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={100}
            maximumValue={300}
            minimumTrackTintColor="black"
            maximumTrackTintColor="orange"
            thumbTintColor="white"
            step={1}
            value={size}
            onValueChange={onValueChangeDebounced}
          />
        </View>
      </View>
      <SliderBar slide={4} path={"Weight"} navigation={navigation} text='Suivant' />
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
    height: "25%",
    marginTop: 120,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 22,
    textAlign: "center",
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "40%",
  },
  slider: {
    width: 300,
  },
});
