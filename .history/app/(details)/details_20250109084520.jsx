import { Dimensions, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, Card, Tab, TabView } from '@rneui/base';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
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
              <ThemedView style={styles.headerLeft}>
                <Button size="md" color="white" radius="xl">
                  <Ionicons name="chevron-back-outline" size={25} />
                </Button>
              </ThemedView>
            ),
            headerRight: () => (
              <ThemedView style={styles.headerRight}>
                <Button size="md" color="white" radius="xl">
                  <Ionicons name="heart-outline" size={25} />
                </Button>
              </ThemedView>
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
        <ThemedView>
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
        <ThemedView style={styles.tourContainer}>
          {" "}
          <ThemedText style={styles.header}>Location on Maps</ThemedText>{" "}
          <Tab value={index} onChange={setIndex}>
            {" "}
            <Tab.Item title="Map view" /> <Tab.Item title="Schools" />{" "}
            <Tab.Item title="Shop & Eat" />{" "}
          </Tab>{" "}
          <TabView
            value={index}
            onChange={setIndex}
            style={styles.mapContainer}
          >
            {" "}
            <TabView.Item style={styles.mapView}>
              {" "}
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                {" "}
                <Marker
                  coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                />{" "}
              </MapView>{" "}
            </TabView.Item>{" "}
            <TabView.Item style={styles.tabView}>
              {" "}
              <ThemedText>Schools Information</ThemedText>{" "}
            </TabView.Item>{" "}
            <TabView.Item style={styles.tabView}>
              {" "}
              <ThemedText>Shop & Eat Information</ThemedText>{" "}
            </TabView.Item>{" "}
          </TabView>{" "}
          <ThemedText style={styles.openHouseHeader}>Open House</ThemedText>{" "}
          <ThemedText>Sun, Jul 2</ThemedText> <ThemedText>11:00 AM - 1:00 PM</ThemedText>{" "}
          <TouchableOpacity style={styles.virtualTourButton}>
            {" "}
            <ThemedText style={styles.virtualTourText}>See Virtual Tour</ThemedText>{" "}
          </TouchableOpacity>{" "}
          <ThemedView style={styles.buttonContainer}>
            {" "}
            <Button title="Call" onPress={() => {}} />{" "}
            <Button title="Message" onPress={() => {}} />{" "}
            <Button title="Tour" onPress={() => {}} />{" "}
          </ThemedView>{" "}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  scrollContainer: {
    flex: 1,
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
  tourContainer: { padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  mapContainer: { height: 200, marginBottom: 16 },
  mapView: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },
  tabView: { flex: 1, justifyContent: "center", alignItems: "center" },
  openHouseHeader: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  virtualTourButton: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  virtualTourText: { color: "#007bff", textAlign: "center" },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
});