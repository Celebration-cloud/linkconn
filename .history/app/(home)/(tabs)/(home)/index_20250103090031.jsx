import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HomeHeader from '../../../../components/HomeHeader'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{header: () => <HomeHeader/>}}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    con
})