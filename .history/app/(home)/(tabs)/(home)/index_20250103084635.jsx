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
            <Avatar rounded size={30} iconStyle={{color}} icon={{name: "bell", type: "feather"}} containerStyle={{backgroundColor: "#F3F4F6FF"}}/>
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

const styles = StyleSheet.create({/* Icon Button 9 */
.button {
  position: absolute; 
  top: 58px; 
  left: 338px; 
  width: 36px; 
  height: 36px; 
  padding: 0 0px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: #565E6CFF; 
  background: #F3F4F6FF; 
  opacity: 1; 
  border: none; 
  border-radius: 18px; 
  gap: 0px; 
}
.button .icon {
  width: 22px; 
  height: 22px; 
  fill: #565E6CFF; 
}
/* Hover */
.button:hover {
  color: #565E6CFF; 
  background: #F3F4F6FF; 
}
/* Pressed */
.button:hover:active {
  color: #565E6CFF; 
  background: #F3F4F6FF; 
}
/* Disabled */
.button:disabled {
  opacity: 0.4; 
}})