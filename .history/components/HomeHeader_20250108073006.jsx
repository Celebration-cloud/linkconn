import React from 'react'

import { Dimensions, StyleSheet } from 'react-native'

import { Avatar } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'
import { Searchbar, TouchableRipple } from 'react-native-paper'
import SearchAndFilter from "./SearchAndFilter"
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const HomeHeader = () => {
    const iconColor = useThemeColor([], "icon")
  return (
    <ThemedView style={styles.container}>
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
            size={40}
            iconStyle={{ color: iconColor }}
            icon={{ name: "bell", type: "feather" }}
            containerStyle={{ backgroundColor: iconColor }}
          />
        </TouchableRipple>
      </ThemedView>
     <SearchAndFilter />
      
    </ThemedView>
  );
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 10,
    marginTop: 40
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    gap: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "light",
  },
  track: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 15,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center"
  },
  inputContainer: {
    width: "85%",
    height: "100%",
  },
});