import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const ProfileScreen = () => {
  return (
    <ThemedView>
      <Text>ProfileScreen</Text>
    </ThemedView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})