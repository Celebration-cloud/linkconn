import React from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { Button, TouchableRipple } from "react-native-paper";
import { Card } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const CardComponent = () => {
    const background = useThemeColor([], "background")
      const tint = useThemeColor([], "tint")
  return (
    <Card
      containerStyle={{
        backgroundColor: background,
        borderColor: tint,
        ...styles.card,
      }}
    >
      <Card.Image
        source={{
          uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
        }}
        style={{ borderRadius: 10, width: "100%" }}
      />
      <ThemedText>Charming Family Home</ThemedText>
      <ThemedText style={styles}>
        Located in a quiet suburb with 3 bedrooms and 2 bathrooms.
      </ThemedText>
      <ThemedText style={styles.price}>$1,200/month</ThemedText>
      <ThemedView style={styles.groupBtn}>
        <Button background="blue" mode="contained" style={styles.cardBtn}>
          Details
        </Button>

        <Button style={styles.cardBtn} mode="contained">
          Contact
        </Button>
        <Button style={styles.cardBtn} mode="contained">
          <Ionicons name="heart-sharp" size={20} />
        </Button>
      </ThemedView>
    </Card>
  );
}

export default CardComponent

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 0,
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 2.4,
    borderRadius: 10,
    padding: 10,
  },

  groupBtn: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    gap: 3,
  },
  cardBtn: {
    width: Dimensions.get("window").width / 3.7,
  },
});