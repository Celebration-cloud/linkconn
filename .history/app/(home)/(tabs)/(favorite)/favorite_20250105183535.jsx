import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab, TabView } from '@rneui/base'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import CardComponent from "@/components/CardComponent";
import TabItem from '../../../../components/TabItem';
const tabItems = ["Homes", "Open Homes", "Searches"]
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
      <TabItem index={index} setIndex={setIndex} tabItems={tabItems}/>
      <TabView
        onChange={setIndex}
        tabItemContainerStyle={{
          width: "100%",
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
        value={index}
      >
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ThemedView style={{ flex: 1 }}>
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </ThemedView>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedView style={{ flex: 1, alignItems: "center" }}>
              <CardComponent />
              <CardComponent />
          </ThemedView>
            </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
            <ScrollView refr showsVerticalScrollIndicator={false}>
          <ThemedView style={{ flex: 1, alignItems: "center" }}>
            <ThemedText>Searches</ThemedText>
          </ThemedView>
            </ScrollView>
        </TabView.Item>
      </TabView>
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