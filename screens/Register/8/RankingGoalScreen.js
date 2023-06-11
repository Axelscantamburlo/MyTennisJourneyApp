import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";
import { Picker } from "@react-native-picker/picker";

// ranking data to map

import { RANKING_DATA } from "../../../data/rankingData";

//redux
import { useSelector } from "react-redux";
import { setRankingGoal } from "../../../redux/actions";

export default function RankingGoalScreen({ navigation }) {

  const {rankingGoal } = useSelector((state) => state.user);


  const [localRankingGoal, setLocalRankingGoal] = useState(1);

  const handleRankingChange = (value) => {
    setLocalRankingGoal(value);
  };

  
  useEffect(() => {
    setLocalRankingGoal(rankingGoal)
  }, [])

  return (
    <View style={styles.container}>
      <BackIcon path="Ranking" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>
            Quel classement souhaitez-vous
          </Text>
          <Text style={styles.questionText}>atteindre dans 1 an</Text>
        </View>
        <Picker
          selectedValue={localRankingGoal}
          onValueChange={(value) => handleRankingChange(value)}
          style={styles.dropDownPicker}
        >
          {RANKING_DATA.map((rank) => {
            return (
              <Picker.Item
                label={rank.label}
                value={rank.value}
                key={rank.value}
              />
            );
          })}
        </Picker>
      </View>
      <SliderBar
        slide={8}
        path="Goals"
        navigation={navigation}
        text="Suivant"
        value={localRankingGoal}
        setValue={setRankingGoal}
      />
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "35%",
  },
  questionText: {
    textAlign: "center",
    fontSize: 22,
  },
  dropDownPicker: {
    width: "85%",
  },
});
