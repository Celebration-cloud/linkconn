import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Avatar } from '@rneui/base'
import { TouchableRipple } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import HomeHeader from '../../../../components/HomeHeader'


const HomeScreen = () => {
  return (
    <View>
        <Stack.Screen options={{header: () => <HomeHeader/>}}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})