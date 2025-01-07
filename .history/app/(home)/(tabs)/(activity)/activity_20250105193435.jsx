import React, { Fragment, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import TabItem from "../../../../components/TabItem";
import TabViewComponent from "../../../../components/TabViewComponent";

const tabItems = ["Notification", "Messages"];

const ActivityScreen = () => {
  const [index, setIndex] = useState(0)
  const tabViews = [
    {
      content: (
        <Fragment>
          <ThemedText>Notification</ThemedText>
        </Fragment>
      ),
    },
    {
      content: (
        <Fragment>
          <ThemedText>Messages</ThemedText>
        </Fragment>
      ),
    },
  ];
  return (
    <ThemedView style={styles.container}> 
    <ThemedView style={styles.tabs}>

      <TabItem index={index} setIndex={setIndex} tabItems={tabItems} />
    </ThemedView>
      <TabViewComponent index={index} setIndex={setIndex} tabViews={tabViews} />
    </ThemedView>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    align
  }
});