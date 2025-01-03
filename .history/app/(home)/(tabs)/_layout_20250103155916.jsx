import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'

import { useThemeColor } from '@/hooks/useThemeColor'

const TabsLayout = () => {
    const tabIconColor = useThemeColor([], "tabIconDefault")
    const tabIconColorActive = useThemeColor([], "tabIconSelected")
    const background = useThemeColor([], "background")
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: tabIconColor,
        tabBarActiveTintColor: tabIconColorActive,
        tabBarStyle: {
          backgroundColor: background,
          height: 60,
        },
        tabBarHideOnKeyboard
      }}
    >
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