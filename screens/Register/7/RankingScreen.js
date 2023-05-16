import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import { Picker } from "@react-native-picker/picker";

export default function RankingScreen({ navigation }) { 

  const [ranking, setRanking] = useState("1")

  console.log(ranking);
  return (
    <View style={styles.container}>
      <BackIcon path="LevelPlayer" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>Quel est votre classement ?</Text>
          {/* <Text style={styles.questionText}>classement ?</Text> */}
        </View>
        <Picker
          selectedValue={ranking}
          onValueChange={(value) => setRanking(value)}
          style={styles.dropDownPicker}
        >
          <Picker.Item label="Non classé" value="1" />
          <Picker.Item label="40" value="2" />
          <Picker.Item label="30/5" value="3" />
          <Picker.Item label="30/4" value="4" />
          <Picker.Item label="30/3" value="5" />
          <Picker.Item label="30/2" value="6" />
          <Picker.Item label="30/1" value="7" />
          <Picker.Item label="30" value="8" />
          <Picker.Item label="15/5" value="9" />
          <Picker.Item label="15/4" value="10" />
          <Picker.Item label="15/3" value="11" />
          <Picker.Item label="15/2" value="12" />
          <Picker.Item label="15/1" value="13" />
          <Picker.Item label="15" value="14" />
          <Picker.Item label="5/6" value="15" />
          <Picker.Item label="4/6" value="16" />
          <Picker.Item label="3/6" value="17" />
          <Picker.Item label="2/6" value="18" />
          <Picker.Item label="1/6" value="19" />
          <Picker.Item label="0" value="20" />
          <Picker.Item label="-2/6" value="21" />
          <Picker.Item label="-4/6" value="22" />
          <Picker.Item label="-15" value="23" />

        </Picker>
      </View>
      <SliderBar slide={7} path="RankingGoal" navigation={navigation} text='Suivant'/>
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
    display: "flex",
    justifyContent: "space-between",
    width: "85%",
    height: "35%"
  },
  questionText: {
    textAlign: "center",
    fontSize: 22,
  },

});
