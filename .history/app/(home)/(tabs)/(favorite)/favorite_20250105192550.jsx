import React, { Fragment, useState } from 'react'

import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Tab, TabView } from '@rneui/base'

import CardComponent from "@/components/CardComponent";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import TabItem from '@/components/TabItem';
import TabViewComponent from '../../../../components/TabViewComponent';

const tabItems = ["Homes", "Open Homes", "Searches"]
const tabViews = [
  {
    content: <Fragment>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </Fragment>
  },
  {
    content: <Fragment>
      <CardComponent/>
      <CardComponent/>
    </Fragment>
  },
  {
    content: <Fragment>
      <ThemedText>Search</ThemedText>
    </Fragment>
  },
]
const FavoriteScreen = () => {
  const [index, setIndex] = useState(0)
  const textColor = useThemeColor([], "text")
  const tintColor = useThemeColor([], "tint")
  const backgroundColor = useThemeColor([], "background")
  const iconColor = useThemeColor([], "icon")
  const tabIconSelected = useThemeColor([], "tabIconSelected");
  const tabIconDefault = useThemeColor([], "tabIconDefault");
  
  return (
    <ThemedView style={styles.container}>
      <TabItem index={index} setIndex={setIndex} tabItems={tabItems} />
      <TabViewComponent index={index} setIndex={setIndex} tabViews={tabViews} />
    </ThemedView>
  );
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})