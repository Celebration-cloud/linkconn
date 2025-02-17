import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{}}>
        <Tabs.Screen name='(home)'/>
        <Tabs.Screen name='(search)'/>
        <Tabs.Screen name='(favorite)'/>
        <Tabs.Screen name='(activity)'/>
        <Tabs.Screen name='(profile)'/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})