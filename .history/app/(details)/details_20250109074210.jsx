import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const DetailsScreen = () => {
  return (
    <ThemedView>
      <TText>DetailsScreen</Text>
    </ThemedView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})