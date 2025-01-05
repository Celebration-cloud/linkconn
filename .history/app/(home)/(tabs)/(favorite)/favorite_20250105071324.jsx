import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab, TabView } from '@rneui/base'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
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
        containerStyle={{ backgroundColor: "rgba(255, 29, 29, 0.56)", gap: 1 }}
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
            fontFamily: "Inter_400Regular",
            width: 110,
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
            padding: 5,
            margin: 0,
            width: 110,
          })}
          titleStyle={(active) => ({
            color: active ? backgroundColor : textColor,
            fontSize: 13,
            fontFamily: "Inter_400Regular",
            paddingLeft: 0,
            paddingRight: 0,
            marginRight: 0,
            marginLeft: 0,
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
            padding: 5,
            margin: 0,
            width: 110,
          })}
          titleStyle={(active) => ({
            color: active ? backgroundColor : textColor,
            fontSize: 15,
            fontFamily: "Inter_400Regular",
            paddingLeft: 0,
            paddingRight: 0,
          })}
        />
      </Tab>
      <ThemedText>FavoriteScreen</ThemedText>
      <TabView onChange={setIndex} value={index}>
        <TabView.Item style={{ width: "100%" }}>
          /* The line `{/* <ThemedView> */}` is a commented-out code in JSX. It is used to temporarily
          disable or comment out a block of code without removing it completely. In this case, the
          `<ThemedView>` component is being commented out, which means it will not be rendered or
          displayed in the UI when the code is executed. This can be helpful for debugging, testing
          different variations, or temporarily removing code without deleting it. */
          <ThemedView>
            <ThemedText>Home</ThemedText>
          </ThemedView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <ThemedView>
            <ThemedText>Open Homes</ThemedText>
          </ThemedView>
        </TabView.Item>
        <TabView.Item>
          <ThemedView style={{ width: "100%" }}>
            <ThemedText>Searches</ThemedText>
          </ThemedView>
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