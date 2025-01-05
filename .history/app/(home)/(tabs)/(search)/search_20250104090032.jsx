import React, { useState } from 'react'

import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native'

import { Stack } from 'expo-router';

import * as Location from "expo-location";
import MapView from 'react-native-maps';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import SearchHeader from '../../../../components/SearchHeader';

const SearchScreen = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
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
    const location = await Location.getCurrentPositionAsync();
    setLocation(location);
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
      <Stack.Screen options={{ header: () => <SearchHeader/> }} />
      <ThemedText>SearchScreen</ThemedText>
      <MapView style={styles.mapView} rotateEnabled={true} region={2322302273278}/>
    </ThemedView>
  );
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: '100%',
    height: '100%',
  }
})