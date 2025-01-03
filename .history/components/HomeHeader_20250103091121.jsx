import React from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { Avatar } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableRipple } from 'react-native-paper'

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.location}>
        <Text style={styles.headerText}>Your Location</Text>
        <View style={styles.track}>
          <Ionicons name="map" size={20} color="blue" />
          <Text style={styles.title}>San Francisco, CA</Text>
        </View>
      </View>
      <TouchableRipple rippleColor="black">
        <Avatar
          rounded
          size={30}
          icon={{ name: "bell", type: "feather" }}
          containerStyle={{ backgroundColor: "grey" }}
        />
      </TouchableRipple>
    </View>
  );
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  location: {
    gap: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "'lighter"
  },
  track: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 15,
  },
});