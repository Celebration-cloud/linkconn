import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

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
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
    }
})