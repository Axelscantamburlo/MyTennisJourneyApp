import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NutritionScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text>Nutrition</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})