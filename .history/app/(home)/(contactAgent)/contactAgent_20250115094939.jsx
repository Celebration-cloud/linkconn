import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from 'expo-router';
const ContactAgentScreen = () => {
  return (
    <ThemedView>
        <Stack.Screen options={{title: "Jacob"}}/>
      <ThemedText>ContactAgentScreen</ThemedText>
    </ThemedView>
  )
}

export default ContactAgentScreen

const styles = StyleSheet.create({
    
})