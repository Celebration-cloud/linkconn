import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ContactAgentLayout = () => {
  return (
    <Stack screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: statusColor,
        statusBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
      }}>
      <Stack.Screen
        name="contactAgent"
        options={{headerTitleAlign: "center"}}
      />
    </Stack>
  );
}

export default ContactAgentLayout

const styles = StyleSheet.create({})