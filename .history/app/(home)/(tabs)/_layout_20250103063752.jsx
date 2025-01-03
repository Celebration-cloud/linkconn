import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='(home)'/>
        <Tabs.Screen name='(search)'/>
        <Tabs.Screen name='(search)'/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})