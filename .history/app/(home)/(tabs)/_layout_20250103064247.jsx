import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name='(home)' options={{}}/>
        <Tabs.Screen name='(search)' options={{}}/>
        <Tabs.Screen name='(favorite)' op/>
        <Tabs.Screen name='(activity)'/>
        <Tabs.Screen name='(profile)'/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})