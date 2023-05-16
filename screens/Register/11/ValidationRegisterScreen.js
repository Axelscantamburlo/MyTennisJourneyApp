import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";

export default function ValidationRegisterScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <BackIcon path="EmailPassword" navigation={navigation} />
      <ScrollView style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>C'est parfait !</Text>
          <Text style={styles.questionText}>
            Voici un résumé de votre profil
          </Text>
        </View>
        <View style={styles.rankingContainer}>
          <View style={styles.textRankingContainer}>
            <View style={styles.ranking}>
              <Text style={styles.rankingText}>Classement</Text>
              <Text style={styles.rankingText}>30/1</Text>
            </View>
            <View style={styles.rankingGoal}>
              <Text style={styles.rankingText}>Objectif</Text>
              <Text style={styles.rankingText}>15/3</Text>
            </View>
          </View>
    
        </View>
      </ScrollView>
      <SliderBar
        slide={11}
        path="Loader"
        navigation={navigation}
        text="Valider l'inscription"
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
    marginTop: 120,
    width: "85%",
    maxHeight: "65%",
  },
  questionText: {
    textAlign: "center",
    fontSize: 22,
  },
  rankingContainer: {
    height: "100%",
    marginTop: 10,
  },
  textRankingContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ranking: {
    width: "50%",
    borderRightWidth: 2,
    borderRightColor: "grey",
  },
  rankingGoal: {
    width: "50%",
  },
  rankingText: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
  },
});
