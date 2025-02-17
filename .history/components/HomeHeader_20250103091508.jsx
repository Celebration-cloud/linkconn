import React from 'react'

import { Dimensions, StyleSheet, Text } from 'react-native'

import { Avatar } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableRipple } from 'react-native-paper'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const HomeHeader = () => {
  return (
    <ThemedView style={styles.header}>
      <ThemedView style={styles.location}>
        <Text style={styles.headerText}>Your Location</Text>
        <ThemedView style={styles.track}>
          <Ionicons name="map" size={20} color="blue" />
          <Text style={styles.title}>San Francisco, CA</Text>
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