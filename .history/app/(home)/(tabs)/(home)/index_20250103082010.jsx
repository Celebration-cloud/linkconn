import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeScreen = () => {
  return (
    <View>
        <Stack.Screen options={{header: () => (<View>
            <View>
        </View>)}}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})