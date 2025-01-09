import { Tab, TabView } from "@rneui/base";
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import TabItem from "./TabItem"
const OpenHouseComponent = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Location on Maps</Text>
      <TabItem index={index} />
      <TabView value={index} onChange={setIndex} style={styles.mapContainer}>
        <TabView.Item style={styles.mapView}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </TabView.Item>
        <TabView.Item style={styles.tabView}>
          <Text>Schools Information</Text>
        </TabView.Item>
        <TabView.Item style={styles.tabView}>
          <Text>Shop & Eat Information</Text>
        </TabView.Item>
      </TabView>
      <Text style={styles.openHouseHeader}>Open House</Text>
      <Text>Sun, Jul 2</Text>
      <Text>11:00 AM - 1:00 PM</Text>
      <TouchableOpacity style={styles.virtualTourButton}>
        <Text style={styles.virtualTourText}>See Virtual Tour</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Call" onPress={() => {}} />
        <Button title="Message" onPress={() => {}} />
        <Button title="Tour" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
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
    ...StyleSheet.absoluteFillObject,
  },
  tabView: {
    flex: 1,
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
