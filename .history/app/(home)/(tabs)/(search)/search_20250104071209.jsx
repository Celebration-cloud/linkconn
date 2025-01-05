import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ header: () => <HomeHeader /> }} />
      <Text>SearchScreen</Text>
    </View>
  );
}

export default SearchScreen

const styles = StyleSheet.create({})