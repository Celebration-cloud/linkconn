import React, { useEffect, useState } from 'react'

import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native'

import { Stack } from 'expo-router';

import * as Location from "expo-location";
import MapView, { Marker } from 'react-native-maps';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import SearchHeader from '../../../../components/SearchHeader';
import { ActivityIndicator } from 'react-native-paper';

const SearchScreen = () => {
  const [location, setLocation] = useState({latitude : null, longitude: null});
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(null);
  const minLat = Math.min(location.latitude)
  const maxLat = Math.max(location.latitude)
  const minLong = Math.min(location.)
  const maxLong = Math.max(location)
  const latitudeDelta = maxLat - minLat + 0.1
  const longitudeDelta = maxLong - minLong + 0.1
  console.log(`latDelta: ${latitudeDelta} - lngDelta: ${longitudeDelta} `)
  console.log(`minLat: ${minLat} -  maxLat: ${maxLat}`)
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
      setLoading(true)
      const location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLoading(false)
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
        <MapView
          style={styles.mapView}
          rotateEnabled={true}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ ...location }} title="Your Location" />
        </MapView>
      )}
      {errorMsg && <ThemedText>No Location</ThemedText>}
      {loading && !errorMsg && <ActivityIndicator animating={true} />}
    </ThemedView>
  );
}

export default SearchScreen

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