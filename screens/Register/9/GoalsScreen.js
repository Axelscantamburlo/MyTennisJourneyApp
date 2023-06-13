import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SliderBar from "../../../components/SliderBar";
import BackIcon from "../../../components/BackIcon";
import Icon from "react-native-vector-icons/Feather";

// redux

import { useDispatch, useSelector } from "react-redux";
import { setGoals } from "../../../redux/actions";

export default function GoalsScreen({ navigation }) {
  const dispatch = useDispatch();

  const {goals} = useSelector((state) => state.user);


  // manage state of keyboard to add a close keyboard button
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const [textInputs, setTextInputs] = useState([""]);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (e) => {
        setIsKeyboardVisible(true);
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      (e) => {
        setIsKeyboardVisible(false);
        setKeyboardHeight(0);
      }
    );

    setTextInputs(goals)

    return () => {
      keyboardWillHideListener.remove();
      keyboardWillShowListener.remove();
    };
  }, []);


  const handleAddTextInput = () => {
    const newTextInput = { id: generateUniqueId(), goal: "" };
    setTextInputs([...textInputs, newTextInput]);
    dispatch(setGoals(textInputs));

  };

  const handleTextInputChange = (text, id) => {
    const newInputs = textInputs.map((input) => {
      if (input.id === id) {
        return { ...input, goal: text };
      }
      return input;
    });
    setTextInputs(newInputs);
    dispatch(setGoals(newInputs));
  };

  const handleDeleteTextInput = (id) => {
    const newInputs = textInputs.filter((input) => input.id !== id);
    setTextInputs(newInputs);
    dispatch(setGoals(newInputs));
  };


  return (
    <View style={styles.container}>
      <BackIcon path="RankingGoal" navigation={navigation} />
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.questionText}>Super !</Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Maintenant, fixez-vous vos premiers objectis
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
          }}
          style={styles.inputsContainer}
        >
          {textInputs.map((textInput, index) => (
            <View style={styles.inputContainer} key={index}>
              <TextInput
                value={textInput.goal}
                style={styles.textInput}
                placeholder="Votre objectif"
                onChangeText={(text) =>
                  handleTextInputChange(text, textInput.id)
                }
              />
              {index !== 0 && (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.trashIcon}
                  onPress={() => handleDeleteTextInput(textInput.id)}
                >
                  <Icon name="trash" size={28} color="orange" />
                </TouchableOpacity>
              )}
            </View>
          ))}

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTextInput}
            activeOpacity={0.5}
          >
            <Text style={{ color: "white", fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("EmailPassword")}
      >
        <Text style={{ color: "#2D9BF0", fontSize: 16 }}>
          Passer pour le moment
        </Text>
      </TouchableOpacity>
      {isKeyboardVisible && (
        <TouchableOpacity
          style={[styles.closeKeyboard, { bottom: keyboardHeight }]}
          activeOpacity={0.5}
          onPress={() => Keyboard.dismiss()}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Terminé</Text>
        </TouchableOpacity>
      )}

      <SliderBar slide={9} path="EmailPassword" navigation={navigation} text='Suivant' value={textInputs} setValue={setGoals} />
      <SliderBar
        slide={9}
        path="EmailPassword"
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
    width: "85%",
    display: "flex",
    alignItems: "center",
    height: "65%",
  },
  questionText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputsContainer: {
    width: "100%",
    marginTop: 30,
    maxHeight: "75%",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    padding: 10,
    borderRadius: 5,
    fontSize: 14,
    marginTop: 20,
    width: "90%",
  },
  trashIcon: {
    marginBottom: 7,
  },

  addButton: {
    backgroundColor: "#2D9BF0",
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
  },
  closeKeyboard: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "orange",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  skipButton: {
    position: "absolute",
    bottom: 165,
  },
});
