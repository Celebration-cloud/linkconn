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
  return (
    <ThemedView style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        titleStyle={{
          fontFamily: "Inter_500Medium",
          fontSize: 12,
          color: textColor,
        }}
        containerStyle={{ backgroundColor: "rgba(209, 36, 36, 0.56)", borderRadius: 20 }}
        variant='primary'
        disableIndicator
      >
        <Tab.Item
          title="Home"
          containerStyle={{}}
          buttonStyle={(active) => ({
            backgroundColor: active ? iconColor : backgroundColor,
            borderRadius: 20,
            padding: 5,
            margin: 0,
            width
          })}
        />
        <Tab.Item
          title="Open Homes"
          containerStyle={{}}
          buttonStyle={(active) => ({
            backgroundColor: active ? iconColor : backgroundColor,
            borderRadius: 20,
            padding: 5,
            margin: 0,
          })}
        />
        <Tab.Item
          title="Searches"
          containerStyle={{}}
          buttonStyle={(active) => ({
            backgroundColor: active ? iconColor : backgroundColor,
            borderRadius: 20,
            padding: 5,
            margin: 0,
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