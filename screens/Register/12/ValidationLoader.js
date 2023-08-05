import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, Text, Vibration } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AnimatedCircularProgress } from 'react-native-circular-progress';



export default function ValidationLoader({ navigation, route }) {

  const { text, path } = route.params

  const [animationFinished, setAnimationFinished] = useState(false)

  const scaleValue = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.03,
        duration: 100, // 500 ms pour agrandir le cercle
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),

      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100, // 500 ms pour réduire le cercle à sa taille initiale
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();
  };


  const secondAnimation = () => {
    setAnimationFinished(true)
    startAnimation()
    Vibration.vibrate();
  }

  setTimeout(() => {
    navigation.navigate(`${path}`)
  }, 3000)

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer} >
        <AnimatedCircularProgress
          size={150}
          width={75}
          fill={100}
          rotation={0}
          tintColor="#2ecc71"
          duration={800}
          delay={500}
          onAnimationComplete={() => secondAnimation()}
          backgroundColor="tomato"
          style={animationFinished && { transform: [{ scale: scaleValue }] }} />
        <View style={styles.iconContainer}>
          <Icon name='check' size={60} color='white' />
        </View>
      </View>
      <Text style={{fontSize: 20}}>{text}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  centerContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
  }
})

