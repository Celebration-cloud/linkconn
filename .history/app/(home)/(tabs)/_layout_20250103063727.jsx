import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='(hi)'/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})