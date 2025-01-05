import React, { useEffect, useState } from 'react'

import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native'

import { Stack } from 'expo-router';

import * as Location from "expo-location";
import MapView, { Marker } from 'react-native-maps';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import SearchHeader from '../../../../components/SearchHeader';

const SearchScreen = () => {
  const [location, setLocation] = useState({latitude : null, longitude: null});
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(null);
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
      const location = await Location.getCurrentPositionAsync();
      
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      setErrorMsg(error.message);
      setLoading
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
      <ThemedText>SearchScreen</ThemedText>
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
       {errorMsg &&  (
          <ThemedText>No Location</ThemedText>
      )}

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