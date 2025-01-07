import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const NotificationComponent = () => {
  return (
    <ThemedView style>
      <ThemedText>NotificationComponent</ThemedText>
    </ThemedView>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({})