import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab } from '@rneui/base'
import { Inter_500Medium } from '@expo-google-fonts/inter'

const FavoriteScreen = () => {
  const [index, setIndex] = useState(0)
  return (
    <View>
      <Tab value={index} onChange={(e) => setIndex(e)} indicatorStyle={{height: }}>
        <Tab.Item
          title="Home"
          titleStyle={{ fontFamily: "Inter_500Medium" }}
          containerStyle={{}}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Open Homes"
          titleStyle={{ fontFamily: "Inter_500Medium" }}
          containerStyle={{}}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Searches"
          titleStyle={{ fontFamily: "Inter_500Medium" }}
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