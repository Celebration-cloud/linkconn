import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, Card } from '@rneui/base';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const property = {
  title: "Beautiful Apartment",
  price: "$1500/month",
  address: "123 Main St, Lagos, Nigeria",
  description: "A lovely two-bedroom apartment with a sea view.",
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
};

const DetailsScreen = () => {
   const textColor = useThemeColor([], "text")
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.container}>
        <Stack.Screen
          options={{
            headerLeft: () => (
              <View style={styles.headerLeft}>
                <Button size="md" color="white" radius="xl">
                  <Ionicons name="chevron-back-outline" size={25} />
                </Button>
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerRight}>
                <Button size="md" color="white" radius="xl">
                  <Ionicons name="heart-outline" size={25} />
                </Button>
              </View>
            ),
            headerTransparent: true,
            headerTitle: "",
            headerTitleStyle: {
              color: textColor,
            },
          }}
        />
        <Card.Image
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
          resizeMode="stretch"
          style={styles.image}
        />
        <Text style={styles.title}>{property.title}</Text>
        <Carousel
          data={property.images}
          renderItem={renderImage}
          sliderWidth={400}
          itemWidth={400}
        />{" "}
        <Text style={styles.price}>Rent: {property.price}</Text>
        <Text style={styles.address}>Address: {property.address}</Text>
        <Text style={styles.description}>{property.description}</Text>
      </ThemedView>
    </ScrollView>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, 
    padding: 16, backgroundColor: '#fff',
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: Dimensions.get("window").height / 2.5,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  image: { height: 200, width: 400 },
  price: { fontSize: 18, fontWeight: "bold", marginVertical: 8 },
  address: { fontSize: 16, marginVertical: 4 },
  description: { fontSize: 14, marginVertical: 4 },
});