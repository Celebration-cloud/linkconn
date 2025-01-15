import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SearchingHeader from '../../../components/SearchingHeader'

const SearchingScreen = () => {
  return (
    <View styl>
        <Stack.Screen
                name="searching"
                options={{ header: () => <SearchingHeader /> }}
              />
      <Text>SearchingScreen</Text>
    </View>
  )
}

export default SearchingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    }
})