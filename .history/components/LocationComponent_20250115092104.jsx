import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
const LocationComponent = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.iconTextContainer}>
        <Ionicons
          name="location-pin"
          type="entypo"
          color="#007AFF"
          size={24}
        />
        <ThemedText style={styles.locationText}>USA, New York</ThemedText>
      </ThemedView>
      <ThemedText style={styles.addressText}>1190 South Street, Memphis, TN 38111</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  addressText: {
    marginTop: 5,
    fontSize: 14,
    color: "#7D7D7D",
  },
});

export default LocationComponent;
