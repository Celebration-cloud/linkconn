import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Avatar } from '@rneui/base'
import { TouchableRipple } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

const HeaderComponent = () => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Your Location</Text>
          <Text style={styles.title}><Ionicons name='map-sharp' size={20} c/>San Francisco, CA</Text>
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
const HomeScreen = () => {
  return (
    <View>
        <Stack.Screen options={{header: () => <HeaderComponent/>}}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})