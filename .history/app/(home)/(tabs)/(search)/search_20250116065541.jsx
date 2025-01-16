import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { Stack } from "expo-router";
import * as Location from "expo-location";
import { ActivityIndicator } from "react-native-paper";
import { Tab } from "@rneui/base";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import SearchHeader from "../../../../components/SearchHeader";

// Fix leaflet's default icon issue with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const SearchScreen = () => {
  const [index, setIndex] = React.useState(0);
  const background = useThemeColor([], "background");
  const tint = useThemeColor([], "tint");
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(null);
  const minLat = Math.min(location.latitude);
  const maxLat = Math.max(location.latitude);
  const minLong = Math.min(location.longitude);
  const maxLong = Math.max(location.longitude);
  const latitudeDelta = maxLat - minLat + 0.1;
  const longitudeDelta = maxLong - minLong + 0.1;
  console.log(`latDelta: ${latitudeDelta} - lngDelta: ${longitudeDelta} `);

  const handleLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission",
        "You must enable permission for this to  work",
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
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          style={styles.mapView}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.latitude, location.longitude]} />
        </MapContainer>
      )}
      {errorMsg && <ThemedText>No Location</ThemedText>}
      {loading && !errorMsg && <ActivityIndicator animating={true} />}
    </ThemedView>
  );
};

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
