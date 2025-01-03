import React from 'react'

import { Dimensions, StyleSheet } from 'react-native'

import { Avatar } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableRipple } from 'react-native-paper'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const HomeHeader = () => {
    const iconColor = useThemeColor([], "icon")
  return (
    <ThemedView style={styles.header}>
      <ThemedView style={styles.location}>
        <ThemedText style={styles.headerText}>Your Location</ThemedText>
        <ThemedView style={styles.track}>
          <Ionicons name="map" size={20} color={iconColor} />
          <ThemedText style={styles.title}>San Francisco, CA</ThemedText>
        </ThemedView>
      </ThemedView>
      <TouchableRipple rippleColor="black">
        <Avatar
          rounded
          size={30}
          
          icon={{ name: "bell", type: "feather" }}
          containerStyle={{ backgroundColor: "grey" }}
        />
      </TouchableRipple>
    </ThemedView>
  );
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  location: {
    gap: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "light"
  },
  track: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 15,
  },
});