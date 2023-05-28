import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import { Picker } from "@react-native-picker/picker";

// ranking data to map

import { RANKING_DATA } from "../../../data/rankingData";

//redux
import { useDispatch } from "react-redux";
import { setRanking } from "../../../redux/actions";

export default function RankingScreen({ navigation }) {
  const dispatch = useDispatch();

  const [localRanking, setLocalRanking] = useState(1);

  const handleRankingChange = (value) => {
    setLocalRanking(value);
    dispatch(setRanking(value));
  };

  return (
    <View style={styles.container}>
      <BackIcon path="LevelPlayer" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>Quel est votre classement ?</Text>
        </View>
        <Picker
          selectedValue={localRanking}
          onValueChange={(value) => handleRankingChange(value)}
          style={styles.dropDownPicker}
        >
          {RANKING_DATA.map((rank) => {
            return <Picker.Item label={rank.label} value={rank.value} key={rank.value} />;
          })}
        </Picker>
      </View>
      <SliderBar
        slide={7}
        path="RankingGoal"
        navigation={navigation}
        text="Suivant"
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
    width: "85%",
    height: "35%",
  },
  questionText: {
    textAlign: "center",
    fontSize: 22,
  },
});
