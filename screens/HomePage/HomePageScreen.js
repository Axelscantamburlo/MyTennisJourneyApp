import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//REDUX
import { useSelector } from "react-redux";

export default function HomePageScreen() {

  const allData = useSelector((state) => state.user)
  console.log("🚀 ~ file: HomePageScreen.js:10 ~ HomePageScreen ~ allData:", allData)
  return (
    <View style={styles.container}>
      <Text>HomePageScreen</Text>
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