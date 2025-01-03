import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'

const TabsLayout = () => {
    const tabIconuseThemeColor([], "tabIconDefault")
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { height: 60 } }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(favorite)"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(activity)"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsLayout

const styles = StyleSheet.create({})