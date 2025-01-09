import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardComponent  from '@/components/CardComponent'
import { TabView } from '@rneui/base'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const TabViewComponent = ({setIndex, index, tabViews}) => {
  return (
    <TabView
      onChange={setIndex}
      tabItemContainerStyle={{
        width: "100%",
        Horizontal: 10,
        paddingTop: 10,
      }}
      value={index}
    >
      {tabViews.map((item, i) => (
      <TabView.Item key={i} style={{ width: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {item.content}
        </ScrollView>
      </TabView.Item>
      ))}
      {/* <TabView.Item style={{ width: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedView style={{ flex: 1, alignItems: "center" }}>
            <CardComponent />
            <CardComponent />
          </ThemedView>
        </ScrollView>
      </TabView.Item>
      <TabView.Item style={{ width: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedView style={{ flex: 1, alignItems: "center" }}>
            <ThemedText>Searches</ThemedText>
          </ThemedView>
        </ScrollView>
      </TabView.Item> */}
    </TabView>
  );
}

export default TabViewComponent;

const styles = StyleSheet.create({})