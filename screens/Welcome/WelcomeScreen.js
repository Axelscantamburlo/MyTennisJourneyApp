import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hey ! Bienvenue,</Text>
        <Text style={styles.text}>Habitué(e) de la balle jaune.</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={() => navigation.navigate("Name")}
      >
        <Text style={{ fontSize: 20, color: "white" }}>C'est parti !</Text>
      </TouchableOpacity>
      <View style={styles.loginTextContainer}>
        <Text style={{fontSize: 16}}>Déjà un compte ? </Text>
        <TouchableHighlight underlayColor='transparent' activeOpacity={0.3} onPress={() => navigation.navigate("NavBar")}>
          <Text style={{ color: "#6184D8", fontSize: 16 }}>Connectez-vous</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    padding: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 110,
    width: "40%",
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1.4,
  },
  text: {
    fontSize: 20,
    letterSpacing: 1.2,
  },
  button: {
    backgroundColor: "orange",
    width: "88%",
    display: "flex",
    alignItems: "center",
    marginTop: 130,
    padding: 15,
    borderRadius: 10,
  },
  loginTextContainer: {
    width: "70%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
  },
});
