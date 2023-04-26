import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function NameScreen() {
  return (
    <View>
      <View>Icone</View>
      <View>
        <Text>Quel est votre prénom ?</Text>
      </View>
      <TextInput placeholder='Prénom'/>
    </View>
  )
}