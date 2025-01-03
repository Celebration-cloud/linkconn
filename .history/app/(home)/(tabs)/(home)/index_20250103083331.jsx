import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Avatar } from 'react-native-paper'

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerText}>Header</Text>
                <Text style={styles.title}>Header</Text>
            </View>
            <Avatar.Icon icon="notification-sharp" size={30} style={{borderRadius: 100}}/>
        </View>
    )
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