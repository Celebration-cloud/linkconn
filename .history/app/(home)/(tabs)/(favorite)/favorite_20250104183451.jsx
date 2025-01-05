import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab } from '@rneui/base'

const FavoriteScreen = () => {
  const [index, setIndex] = useState(0)
  return (
    <View>
      <Tab value={index} onChange={(e) => setIndex(e)} indicatorStyle={{}}>
        <Tab.Item
          title="Home"
          titleStyle={{}}
          containerStyle={{}}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Open Homes"
          titleStyle={{}}
          containerStyle={{}}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Searches"
          titleStyle={{}}
          containerStyle={{}}
          buttonStyle={{}}
        />
      </Tab>
      <Text>FavoriteScreen</Text>
    </View>
  );
}

export default FavoriteScreen

const styles = StyleSheet.create({})