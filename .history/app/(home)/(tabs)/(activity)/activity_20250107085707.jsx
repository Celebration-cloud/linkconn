import React, { Fragment, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import TabItem from "../../../../components/TabItem";
import TabViewComponent from "../../../../components/TabViewComponent";
import NotificationComponent from '../../../../components/NotificationComponent';
import MessagesComponent from '../../../../components/MessagesComponent';

const tabItems = ["Notification", "Messages"];

const ActivityScreen = () => {
  const [index, setIndex] = useState(0)
  const tabViews = [
    {
      content: (
        <NotificationComponent />
      ),
    },
    {
      content: (
        <MessagesComponent />
      ),
    },
  ];
  return (
    <ThemedView style={styles.container}> 
      <TabItem index={index} setIndex={setIndex} tabItems={tabItems} style={{marginHorizontal: 50, width: "65%"}}/>

      <TabViewComponent index={index} setIndex={setIndex} tabViews={tabViews} />
    </ThemedView>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  
});