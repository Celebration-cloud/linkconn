import { Dimensions, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
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
        <OpenHouseComponent/>
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
});