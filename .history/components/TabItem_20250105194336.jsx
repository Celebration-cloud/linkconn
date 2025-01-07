import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Tab } from '@rneui/base'
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const TabItem = ({index, setIndex, tabItems}) => {
    const textColor = useThemeColor([], "text")
      const tintColor = useThemeColor([], "tint")
      const backgroundColor = useThemeColor([], "background")
      const iconColor = useThemeColor([], "icon")
      const tabIconSelected = useThemeColor([], "tabIconSelected");
      const tabIconDefault = useThemeColor([], "tabIconDefault");
  return (
    <ThemedView style={{styles.tabs}}>
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
            backgroundColor: active ? tabIconSelected : backgroundColor,
            borderRadius: 20,
            padding: 5,
            margin: 0,
            fontFamily: "Inter_400Regular",
            width: 110,
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
    marginHorizontal: 55,
    paddingLeft: 8,
    paddingVertical: 5,
    width: "70%",
    borderRadius: 20,
  },
});