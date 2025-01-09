import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, Card, Tab, TabView } from '@rneui/base';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import OpenHouseComponent from '../../components/OpenHouseComponent';
const property = {
  title: "Beautiful Apartment",
  price: "$1500/month",
  address: "123 Main St, Lagos, Nigeria",
  description: "A lovely two-bedroom apartment with a sea view.",
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
};

const DetailsScreen = () => {
   const textColor = useThemeColor([], "text")
   const [index, setIndex] = React.useState(0)
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
        <ThemedView style={{ paddingHorizontal: 15 }}>
          <ThemedText style={styles.title}>{property.title}</ThemedText>
          {/* <Carousel
          data={property.images}
          renderItem={renderImage}
          sliderWidth={400}
          itemWidth={400}
        />{" "} */}
          <ThemedText style={styles.price}>Rent: {property.price}</ThemedText>
          <ThemedText style={styles.address}>
            Address: {property.address}
          </ThemedText>
          <ThemedText style={styles.description}>
            {property.description}
          </ThemedText>
        </ThemedView>
        <OpenHouseComponent />
        <ThemedView style={{ paddingHorizontal: 15, gap: 10 }}>
          <ThemedText style={styles.openHouseHeader}>Open House</ThemedText>
          <ThemedText>Sun, Jul 2</ThemedText>
          <ThemedText>11:00 AM - 1:00 PM</ThemedText>
          <Button title="See Virtual Tour" onPress={() => {}} />
          <ThemedView style={styles.buttonContainer}>
            <Button title="Call" sty  radius="lg" onPress={() => {}} />
            <Button title="Message"   radius="lg" onPress={() => {}} />
            <Button title="Tour" radius="lg" onPress={() => {}} />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: Dimensions.get("window").height / 2.5,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  price: { fontSize: 18, fontWeight: "bold", marginVertical: 8 },
  address: { fontSize: 16, marginVertical: 4 },
  description: { fontSize: 14, marginVertical: 4 },
  openHouseHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  virtualTourButton: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  virtualTourText: {
    color: "#007bff",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: 30
  },
});