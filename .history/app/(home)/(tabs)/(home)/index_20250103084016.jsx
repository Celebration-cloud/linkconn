import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Avatar } from '@rneui/base'

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerText}>Header</Text>
                <Text style={styles.title}>Header</Text>
            </View>
            <Avatar rounded size={30} iconStyle={{backgroundColor: "grey"}} icon={{name: "notification", type: "ionicon"}} containerStyle={{ba}}/>
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