import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MessagingInput from "../../../components/MessagingInput"
import { Stack } from 'expo-router';
const ContactAgentScreen = () => {
  return (
    <ThemedView style={styles.container}>
        <Stack.Screen options={{title: "Jacob"}}/>
      <ThemedText>ContactAgentScreen</ThemedText>
      <Th
      <MessagingInput/>
    </ThemedView>
  )
}

export default ContactAgentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})