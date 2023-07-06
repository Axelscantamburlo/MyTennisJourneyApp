import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import BackIcon from "../../../components/BackIcon";
import SliderBar from "../../../components/SliderBar";
import Icon from "react-native-vector-icons/Feather";

// ranking data to map

import { RANKING_DATA } from "../../../data/rankingData";

// redux
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ValidationRegisterScreen({ navigation }) {

  const allData = useSelector((state) => state.user)

  const { sexe, age, size, weight, levelPlayeur, ranking, rankingGoal, goals } = allData
  

  const [rankingToShow, setRankingToShow] = useState(
    RANKING_DATA[ranking - 1].label
  );
  const [rankingGoalToShow, setRankingGoalToShow] = useState(
    RANKING_DATA[rankingGoal - 1].label
  );



  const [healthData, setHealthData] = useState({
    calories: 0,
    water: 0
  })
  useEffect(() => {
    calculateHealthData()
  }, [])

  const healthmultiplicator = {
    cal: {
      "Débutant": 1.375,
    'Intermédiaire': 1.55,
    "Confirmé": 1.725,
    "Expert": 1.9
    },
    wat: {
      "Débutant": 30,
      'Intermédiaire': 40,
      "Confirmé": 50,
      "Expert": 60
    }

  }

  const calculateHealthData = () => {
    if(sexe === 'Homme') {
      const cal = Math.round(((13.7516 * weight) + (5 * size) - (6.7550 * age) + 66.473) * healthmultiplicator.cal[levelPlayeur])
      const wat = (weight * healthmultiplicator.wat[levelPlayeur] / 1000)
      setHealthData({
        calories: cal,
        water: wat
      })
    } else if(sexe === 'Femme') {
      const cal = Math.round(((9.5634 * weight) + (1.85 * size) - (4.6576 * age) + 655.0955) * healthmultiplicator.cal[levelPlayeur])
      const wat = (weight * healthmultiplicator.wat[levelPlayeur] / 1000)
      setHealthData({
        calories: cal,
        water: wat
      })
   
    }
  }


  return (
    <View style={styles.container}>
      <BackIcon path="EmailPassword" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>C'est parfait !</Text>
          <Text style={styles.questionText}>
            Voici un résumé de votre profil
          </Text>
        </View>
        <View style={styles.rankingCard}>
          <View style={styles.textRankingContainer}>
            <View style={styles.ranking}>
              <Text style={styles.title}>Classement</Text>
              <Text style={styles.text}>{rankingToShow}</Text>
            </View>
            <View style={styles.rankingGoal}>
              <Text style={styles.title}>Objectif</Text>
              <Text style={styles.text}>{rankingGoalToShow}</Text>  
            </View>
          </View>
          <View
            style={{
              borderWidth: 2,
              marginTop: 20,
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <Text style={{ textAlign: "center" }}>Courbe à placer</Text>
          </View>
        </View>
        <View style={styles.goalsCard}>
          <ScrollView
            scrollEnabled={goals.length >= 3}
            contentContainerStyle={styles.scrollViewContent}
          >
            {goals[0] !== "" ? (
              <View>
                {goals.map((goal, index) => {
                  return (
                    <View style={styles.goalContainer} key={index}>
                      <Text style={styles.goalText}>{goal}</Text>
                      <Icon
                        name="square"
                        style={{ marginRight: 10 }}
                        size={23}
                        color="black"
                      />
                    </View>
                  );
                })}
              </View>
            ) : (
              <Text style={{textAlign: 'center', fontSize: 16}}>Pas d'objectifs pour l'instant</Text>
            )}
          </ScrollView>
        </View>
        <View style={styles.corpulenceCard}>
          <View style={styles.corpulenceInfo}>
            <View style={styles.item}>
              <Text style={styles.title}>Taille</Text>
              <Text style={styles.text}>{size} cm</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Âge</Text>
              <Text style={styles.text}>{age} ans</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Poids</Text>
              <Text style={styles.text}>{weight} kg</Text>
            </View>
          </View>
          <View style={styles.graphicContainer}>
            <View style={styles.circle}>
              <Text>{healthData.calories}</Text>
              <Text>kcal</Text>
            </View>
            <View style={styles.circle}>
              <Text>{healthData.water}</Text>
              <Text>L</Text>
            </View>
          </View>
          <Text style={{ fontSize: 11, textAlign: 'center', }}>Estimation de vos besoins calorique et hydrique journalier</Text>
     
        </View>
      </View>
      <SliderBar
        slide={11}
        path="ValidationLoader"
        navigation={navigation}
        text="Valider l'inscription"
        store={allData}
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
    marginTop: 100,
    width: "85%",
    height: "70%",
  },
  questionText: {
    textAlign: "center",
    fontSize: 22,
  },
  // general text style
  title: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 3,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },

  // First Card (Ranking info)
  rankingCard: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    transform: [{ rotate: "-2deg" }],
  },
  textRankingContainer: {
    flexDirection: "row",
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
  },

  // Second card (goals info)
  goalsCard: {
    height: "20%",
    borderRadius: 10,
    transform: [{ rotate: "3deg" }, { translateY: -15 }],
    backgroundColor: "#FFCE49",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  goalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 5,
    paddingBottom: 7,
    width: "100%",
  },
  goalText: {
    paddingLeft: 25,
  },

  // Third card (corpulence info)
  corpulenceCard: {
    // flex: 1,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    transform: [{ rotate: "-1.5deg" }, { translateY: -20 }],
    zIndex: -10,
    flex: 1,
  },
  corpulenceInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  item: {
    width: "33%",
  },
  graphicContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 0.9,
    marginTop: 5,
    marginBottom: 5,
  },
  circle: {
    borderWidth: 5,
    borderColor: "skyblue",
    width: 75,
    height: 75,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
