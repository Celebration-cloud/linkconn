import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, ToastAndroid } from "react-native";
import { Stack } from "expo-router";
import * as Location from "expo-location";
import { ActivityIndicator } from "react-native-paper";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import SearchHeader from "../../../../components/SearchHeader";
import { WebView } from "react-native-webview";

const SearchScreen = () => {
  const background = useThemeColor([], "background");
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const MAPBOX_ACCESS_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN"; // Replace with your Mapbox access token

  const handleLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission", "You must enable permission for this to work", [
        { text: "Okay" },
      ]);
      setErrorMsg("Permission to access location was denied");
      setLoading(false);
      return;
    }
    setErrorMsg(null);
    try {
      const loc = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
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

  const mapHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <style>
          body { margin: 0; padding: 0; }
          #map { height: 100%; width: 100%; }
        </style>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css" rel="stylesheet" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js"></script>
        <script>
          mapboxgl.accessToken = '${MAPBOX_ACCESS_TOKEN}';
          window.onload = function() {
            const map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v11', // Replace with your style  
              center: [${location.longitude}, ${location.latitude}], // [lng, lat]
              zoom: 14  
            });

            new mapboxgl.Marker()
              .setLngLat([${location.longitude}, ${location.latitude}])
              .addTo(map);
          };
        </script>
      </head>
      <body>
        <div id="map"></div>
      </body>
    </html>
  `;

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ header: () => <SearchHeader /> }} />
      {loading ? (
        <ActivityIndicator animating={true} />
      ) : (
        location.latitude &&
        location.longitude && (
          <WebView
            originWhitelist={["*"]}
            source={{ html: mapHtml }}
            style={{ ...styles.mapView, backgroundColor: background }}
          />
        )
      )}
      {errorMsg && <ThemedText>No Location</ThemedText>}
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
