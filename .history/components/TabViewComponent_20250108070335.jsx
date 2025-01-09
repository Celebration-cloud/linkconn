import React from 'react'

import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { TabView } from '@rneui/base'

import { useThemeColor } from "@/hooks/useThemeColor";

const TabViewComponent = ({setIndex, index, tabViews}) => {
  return (
    <TabView
      onChange={setIndex}
      tabItemContainerStyle={{
        paddingV: 12,
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
    </TabView>
  );
}

export default TabViewComponent;

const styles = StyleSheet.create({})