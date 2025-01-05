import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab } from '@rneui/base'

const FavoriteScreen = () => {
  const [index, setIndex] = useState(0)
  return (
    <View>
      <Tab onChange={(e) => setIndex(e)} indicatorStyle>
        <Tab.Item title="" titleStyle={{}} containerStyle={{}} buttonStyle={{}}/>
      </Tab>
      <Text>FavoriteScreen</Text>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})