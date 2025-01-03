import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const headerComponent = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
        </View>
    )
}
const HomeScreen = () => {
  return (
    <View>
        <Stack.Screen options={{header: () => <headerComponent/>}}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})