import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name='(home)' options={{title: "Home", tabBarButton: () => (<Ionicons name='h'/>)}}/>
        <Tabs.Screen name='(search)' options={{title: "Search"}}/>
        <Tabs.Screen name='(favorite)' options={{title: "Favorite"}}/>
        <Tabs.Screen name='(activity)' options={{title: "Activity"}}/>
        <Tabs.Screen name='(profile)' options={{title: "Profile"}}/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})