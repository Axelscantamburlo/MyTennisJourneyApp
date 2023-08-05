import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from '../../../components/NavBar';

export default function CompetitionScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text>Competition</Text>
    {/* <NavBar navigation={navigation} /> */}
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