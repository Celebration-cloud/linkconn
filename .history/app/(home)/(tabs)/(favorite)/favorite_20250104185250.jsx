import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Tab } from '@rneui/base'
import { Inter_500Medium } from '@expo-google-fonts/inter'

const FavoriteScreen = () => {
  const [index, setIndex] = useState(0)
  return (
    <View>
      <Tab value={index} onChange={(e) => setIndex(e)} titleStyle={{ fontFamily: "Inter_500Medium", fontSize: 11 }} containerStyle={{backgroundColor: "grey", padding: 10}} indicatorStyle={{backgroundColor: "green"}}>
        <Tab.Item
          title="Home"
          containerStyle={{borderRightWidth: 1, }}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Open Homes"
          containerStyle={{}}
          buttonStyle={{}}
        />
        <Tab.Item
          title="Searches"
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