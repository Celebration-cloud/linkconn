import React from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { Button, Card } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { TouchableRipple } from 'react-native-paper';
import { useRouter } from 'expo-router';

const CardComponent = () => {
    const background = useThemeColor([], "background")
      const tint = useThemeColor([], "tint")
      const router = useRouter()
      const handleDetails = () => { 
        console.log("Details button pressed");
        router.navigate("(details)")
       };
  return (
    <TouchableRipple onPress={han} rippleColor="grey">
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
        <ThemedView style={styles.cardDetails}>
          <ThemedText type="title" style={styles.title}>
            Charming Family Home
          </ThemedText>
          <ThemedText type="subtitle" style={styles.description}>
            Located in a quiet suburb with 3 bedrooms and 2 bathrooms.
          </ThemedText>
          <ThemedText style={styles.price}>$1,200/month</ThemedText>
        </ThemedView>

        <ThemedView style={styles.groupBtn}>
          {/* <TouchableRipple rippleColor="black"> */}
          <ThemedView style={styles.cardBtn}>
            <Button
              title="Details"
              buttonStyle={{
                width: 80,
                overflow: "hidden",
                fontSize: 10,
                borderRadius: 30,
              }}
              size="md"
            />
          </ThemedView>
          <ThemedView style={styles.cardBtn}>
            <Button
              title="Contact"
              buttonStyle={{
                width: 80,
                backgroundColor: "green",
                fontSize: 10,
                borderRadius: 30,
              }}
              size="md"
            />
          </ThemedView>
          <ThemedView style={styles.cardBtn}>
            <Button
              icon={{
                type: "font-awesome",
                name: "heart",
                size: 20,
                color: "white",
              }}
              buttonStyle={{
                width: 80,
                backgroundColor: "red",
                fontSize: 10,
                borderRadius: 30,
              }}
              size="md"
            />
          </ThemedView>
        </ThemedView>
      </Card>
    </TouchableRipple>
  );
}

export default CardComponent

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 0,
    width: Dimensions.get("window").width / 1.2,
    height: Dimensions.get("window").height / 2.2,
    borderRadius: 10,
    padding: 0,
    borderWidth: 0,

  },
  cardDetails:{
    gap: 10,
    marginTop: 10,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    fontWeight: "heavy",
    color: "rgb(0, 115, 255)",
  },
  description: {
    fontSize: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: "heavy",
    color: "rgb(249, 61, 61)",
  },
  groupBtn: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    gap: 3,
  },
  cardBtn: {
    borderRadius: 20,
    overflow: "hidden",
  },
});