import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import MessagingInput from "../../../components/MessagingInput"

const ContactAgentScreen = () => {
  return (
    <ThemedView style={styles.container}>
        <Stack.Screen options={{title: "Jacob"}}/>
      <ThemedText>ContactAgentScreen</ThemedText>
      <ThemedView>

      <MessagingInput/>
      </ThemedView>
    </ThemedView>
  )
}

export default ContactAgentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})