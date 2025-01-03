import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'
import { TouchableRipple } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.location}>
        <Text style={styles.headerText}>Your Location</Text>
        <Text style={styles.title}>
          <Ionicons name="map" size={20} color="blue" />
          {"   "}San Francisco, CA
        </Text>
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
        flexDirection: 'row',
    },
})