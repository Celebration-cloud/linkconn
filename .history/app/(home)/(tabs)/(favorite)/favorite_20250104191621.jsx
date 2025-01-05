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
  const iconColor = useThemeColor([], "icon")
  return (
    <ThemedView style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        titleStyle={{
          fontFamily: "Inter_500Medium",
          fontSize: 11,
          color: "black",
        }}
        containerStyle={{ backgroundColor: "white", padding: 20 }}
        renderIndicator={() => (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: iconColor,
              zIndex: -1,
            }}
          />
        )}
      >
        <Tab.Item
          title="Home"
          containerStyle={{ backgroundColor: "white" }}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Open Homes"
          containerStyle={{ backgroundColor: "white" }}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Searches"
          containerStyle={{ backgroundColor: "white" }}
          buttonStyle={{}}
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
  }
})