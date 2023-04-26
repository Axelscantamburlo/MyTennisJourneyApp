import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated,Text } from 'react-native';

const LoaderScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }, []);

  setTimeout(() => {
    navigation.navigate('Welcome')
  }, 4500)

  const width = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.progressBar}>
        <Animated.View style={[styles.innerProgressBar, { width }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    padding: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black'
  },
  progressBar: {
    width: '80%',
    height: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  innerProgressBar: {
    height: '100%',
    backgroundColor: '#FF5733',
  },
});

export default LoaderScreen;
