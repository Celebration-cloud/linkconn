import React, { Fragment, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
const tabItems = ["Notification", "Messages"];

const ActivityScreen = () => {
  const [index, setIndex] = useState(0)
  const tabViews = [
    {content: (<Fragment>
      <ThemedText>Notification</ThemedText>
    </Fragment>)},
    {content: (<Fragment>
      <ThemedText>Me</ThemedText>
    </Fragment>)}
  ]
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