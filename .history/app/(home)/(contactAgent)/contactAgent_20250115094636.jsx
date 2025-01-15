import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const ContactAgentScreen = () => {
  return (
    <ThemedView>
      <ThThemedText>ContactAgentScreen</ThemedText>
    </ThemedView>
  )
}

export default ContactAgentScreen

const styles = StyleSheet.create({})