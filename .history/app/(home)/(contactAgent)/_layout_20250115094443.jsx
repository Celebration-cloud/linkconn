import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ContactAgentLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="ContactAgent"
      />
    </Stack>
  );
}

export default ContactAgentLayout

const styles = StyleSheet.create({})