import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabView = ({setIndex, index, tabI}) => {
  return (
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
                <ScrollView showsVerticalScrollIndicator={false}>
              <ThemedView style={{ flex: 1, alignItems: "center" }}>
                <ThemedText>Searches</ThemedText>
              </ThemedView>
                </ScrollView>
            </TabView.Item>
          </TabView>
  )
}

export default TabView

const styles = StyleSheet.create({})