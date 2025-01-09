import React from 'react'

import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

import { TabView } from '@rneui/base'

import { useThemeColor } from "@/hooks/useThemeColor";

const TabViewComponent = ({setIndex, index, tabViews, style}) => {
  return (
    <TabView
      onChange={setIndex}
      tabItemContainerStyle={{
        paddingTop: 10,
      }}
      containerStyle={{
        ...style,
        width: Dimensions.get("window").width,
      }}
      value={index}
    >
      {tabViews.map((item, i) => (
        <TabView.Item key={i} style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height: }}>
            {item.content}
          </ScrollView>
        </TabView.Item>
      ))}
    </TabView>
  );
}

export default TabViewComponent;

const styles = StyleSheet.create({})