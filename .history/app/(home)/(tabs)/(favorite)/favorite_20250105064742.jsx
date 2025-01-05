import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab } from '@rneui/base'
import { Inter_500Medium } from '@expo-google-fonts/inter'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
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
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        titleStyle={{
          fontFamily: "Inter_500Medium",
          fontSize: 5,
          color: textColor,
        }}
        containerStyle={{ backgroundColor: "rgba(255, 29, 29, 0.56)" }}
        disableIndicator
      >
        <Tab.Item
          title="Home"
          containerStyle={{}}
          buttonStyle={(active) => ({
            backgroundColor: active ? tabIconSelected : backgroundColor,
            borderRadius: 20,
            padding: 5,
            margin: 0,
          })}
          titleStyle={(active) => ({
            color: active ? backgroundColor : textColor,
          })}
        />
        <Tab.Item
          title="Open Homes"
          containerStyle={{}}
          buttonStyle={(active) => ({
            backgroundColor: active ? tabIconSelected : backgroundColor,
            borderRadius: 20,
            padding: 0,
            margin: 0,
          })}
          titleStyle={(active) => ({
            color: active ? backgroundColor : textColor,
            fontSize: 13,
            margin
            width: "100%",
            textAlign: "center",
          })}
        />
        <Tab.Item
          title="Searches"
          containerStyle={{
            backgroundColor: backgroundColor,
          }}
          buttonStyle={(active) => ({
            backgroundColor: active ? tabIconSelected : backgroundColor,
            borderRadius: 20,
            padding: 0,
            margin: 0,
          })}
          titleStyle={(active) => ({
            color: active ? backgroundColor : textColor,
          })}
        />
      </Tab>
      <ThemedText>FavoriteScreen</ThemedText>
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