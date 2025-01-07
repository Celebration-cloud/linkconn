import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Tab } from '@rneui/base'
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const TabItem = ({index, setIndex, tabItems, sty}) => {
    const textColor = useThemeColor([], "text")
      const tintColor = useThemeColor([], "tint")
      const backgroundColor = useThemeColor([], "background")
      const iconColor = useThemeColor([], "icon")
      const tabIconSelected = useThemeColor([], "tabIconSelected");
      const tabIconDefault = useThemeColor([], "tabIconDefault");
  return (
    <ThemedView style={{ ...styles.tabs, backgroundColor: iconColor, ...style}}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        titleStyle={{
          fontFamily: "Inter_500Medium",
          fontSize: 5,
          color: textColor,
        }}
        containerStyle={{ backgroundColor: "rgba(255, 29, 29, 0.56)", gap: 1 }}
        disableIndicator
      >
        {tabItems.map((item, i) => (
          <Tab.Item
            key={i}
            title={item}
            containerStyle={{}}
            buttonStyle={(active) => ({
              backgroundColor: active ? tabIconSelected : undefined,
              borderRadius: 20,
              padding: 5,
              margin: 0,
              fontFamily: "Inter_400Regular",
              width: 100,
            })}
            titleStyle={(active) => ({
              color: active ? backgroundColor : textColor,
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              paddingLeft: 0,
              paddingRight: 0,
            })}
          />
        ))}
      </Tab>
    </ThemedView>
  );
}

export default TabItem

const styles = StyleSheet.create({
  tabs: {
    paddingLeft: 8,
    paddingVertical: 5,
    borderRadius: 20,
  },
});