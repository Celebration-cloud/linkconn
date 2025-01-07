import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const ActivityScreen = () => {
  const [index, setIndex] = useState()
  return (
    <ThemedView style={styles.container}> 
      <ThemedText>ActivityScreen</ThemedText>

    </ThemedView>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})