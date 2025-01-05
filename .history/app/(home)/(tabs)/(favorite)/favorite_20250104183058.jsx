import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab } from '@rneui/base'

const FavoriteScreen = () => {
  const [index, setIndex] = useState()
  return (
    <View>
      <Tab on>
        <Tab.Item title="" titleStyle={{}} containerStyle={{}} buttonStyle={{}}/>
      </Tab>
      <Text>FavoriteScreen</Text>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})