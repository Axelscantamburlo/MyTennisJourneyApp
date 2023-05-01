import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import { Picker } from "@react-native-picker/picker";

export default function RankingScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  //   const [open, setOpen] = useState(false);
  //   const [value, setValue] = useState(null);
  //   const [items, setItems] = useState([
  //     { label: "40", value: "40" },
  //     { label: "30/5", value: "30/5" },
  //     { label: "30/4", value: "30/4" },
  //     { label: "30/3", value: "30/3" },
  //     { label: "30/2", value: "30/2" },
  //     { label: "30/1", value: "30/1" },
  //     { label: "30", value: "30" },
  //     { label: "15/5", value: "15/5" },
  //     { label: "15/4", value: "15/4" },
  //     { label: "15/3", value: "15/3" },
  //     { label: "15/2", value: "15/2" },
  //     { label: "15/1", value: "15/1" },
  //     { label: "15", value: "15" },
  //     { label: "5/6", value: "5/6" },
  //     { label: "4/6", value: "4/6" },
  //     { label: "3/6", value: "3/6" },
  //     { label: "2/6", value: "2/6" },
  //     { label: "1/6", value: "1/6" },
  //     { label: "0", value: "0" },
  //     { label: "-2/6", value: "-2/6" },
  //     { label: "-4/6", value: "-4/6" },
  //     { label: "-15", value: "-15" },
  //   ]);

  return (
    <View style={styles.container}>
      <BackIcon path="LevelPlayer" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>Quel est votre</Text>
          <Text style={styles.questionText}>classement ?</Text>
        </View>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <SliderBar slide={7} path="RankingGoal" navigation={navigation} />
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
    width: "85%",
  },
  questionText: {
    textAlign: "center",
    fontSize: 23,
  },
  dropDownPicker: {
    borderColor: "orange",
  },
});
