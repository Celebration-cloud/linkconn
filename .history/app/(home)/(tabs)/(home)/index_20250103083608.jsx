import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerText}>Header</Text>
                <Text style={styles.title}>Header</Text>
            </View>
            <A
        </View>
    )
}
const HomeScreen = () => {
  return (
    <View>
        <Stack.Screen options={{header: () => <HeaderComponent/>}}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})