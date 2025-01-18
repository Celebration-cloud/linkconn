import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, ToastAndroid } from 'react-native';
import { Stack } from 'expo-router';
import * as Location from "expo-location";
import { ActivityIndicator } from 'react-native-paper';
import { LeafletView, Marker } from 'react-native-leaflet-view';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import SearchHeader from '../../../../components/SearchHeader';

const SearchScreen = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(null);
  const background = useThemeColor([], "background");
  const tint = useThemeColor([], "tint");

  const handleLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission",
        "You must enable permission for this to work",
        [{ text: "Okay" }]
      );
      setErrorMsg("Permission to access location was denied");
      return;
    }
    setErrorMsg(null);
    try {
      setLoading(true);
      const location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLocation();
  }, []);

  if (errorMsg) {
    ToastAndroid.show(errorMsg, ToastAndroid.LONG);
  }

  console.log("location:", location);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ header: () => <SearchHeader /> }} />
      {location.latitude && location.longitude && (
        <LeafletView
          mapMarkers={[{
            position: location,
            icon: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
            size: [32, 32],
            title: "Your Location"
          }]}
          mapLayers={[{
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
            urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }]}
          mapCenterPosition={location}
          zoom={13}
          style={styles.mapView}
        />
      )}
      {errorMsg && <ThemedText>No Location</ThemedText>}
      {loading && !errorMsg && <ActivityIndicator animating={true} />}
    </ThemedView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapView: {
    width: "100%",
    height: "100%",
  },
});
