import { Tab, TabView } from "@rneui/base";
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import TabItem from "./TabItem"
import { Dimensions } from "react-native";
import TabViewComponent from "./TabViewComponent";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const tabItems = ["Map view", "Schools", "Shop & Eat"];
const OpenHouseComponent = () => {
  const [index, setIndex] = React.useState(0);
  const tabViews = [
    {
      content: (
           <MapView
          style={styles.map}
          scrollEnabled={fals}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: 122.4324 }} />
        </MapView>
       
      ),
    },
    { content: <ThemedText>Schools Information</ThemedText> },
    { content: <ThemedText>Shop & Eat Information</ThemedText> },
  ];

  return (
    <ThemedView style={styles.openHouseContainer}>
      <ThemedText style={styles.header}>Location on Maps</ThemedText>
      <TabItem index={index} setIndex={setIndex} tabItems={tabItems} />
      <TabViewComponent
        index={index}
        setIndex={setIndex}
        tabViews={tabViews}
      />
      
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  openHouseContainer: {
    padding: 16,
    gap: 10,
    height: 300
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  mapContainer: {
    height: 200,
    marginBottom: 16,
  },
  mapView: {
    flex: 1,
  },
  map: {
    width: "90%",
    height: Dimensions.get("window").height /4
  },
  tabView: {
    justifyContent: "center",
    alignItems: "center",
  },
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
});

export default OpenHouseComponent;
