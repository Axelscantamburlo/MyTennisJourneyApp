import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomePageScreen({navigation}) {
  return(
    <View>
      <Text>HomePage</Text>
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