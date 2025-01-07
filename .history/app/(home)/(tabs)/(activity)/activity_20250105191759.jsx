import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const ActivityScreen = () => {
  return (
    <ThemedView>
      <ThemedText>ActivityScreen</ThemedText>
    </ThemedView>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({
  
})