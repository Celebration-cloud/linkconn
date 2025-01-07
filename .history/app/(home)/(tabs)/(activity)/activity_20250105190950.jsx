import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const ActivityScreen = () => {
  return (
    <ThemedView>
      <ThemeText>ActivityScreen</ThemeText>
    </ThemedView>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({})