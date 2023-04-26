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
        style={styles.button}
        onPress={() => navigation.navigate("NameRequest")}
      >
        <Text style={{ fontSize: 20, color: 'white' }}>C'est parti !</Text>
      </TouchableOpacity>
      <View style={styles.loginTextContainer}>
        <Text>Déjà un compte ? </Text>
        <TouchableHighlight onPress={() => navigation.navigate("Login")}>
          <Text style={{color: 'blue'}}>Connectez-vous</Text>
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
    marginTop: 120,
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
    padding: 13,
    borderRadius: 5,
  },
  loginTextContainer: {
    width: "70%",
    flexDirection: 'row',
    display: 'flex',
    justifyContent:'center',
    position: 'absolute',
    bottom: 60
  }
});
