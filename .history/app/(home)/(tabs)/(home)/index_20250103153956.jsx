import React from 'react'

import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import HomeHeader from '../../../../components/HomeHeader'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScrollView } from 'react-native';
const HomeScreen = () => {
  const background = useThemeColor([], "background")
  return (
    <ScrollView contentContainerStyle={{...styles.container, backgroundColor: background}}>
      <ThemedView style={styles.containerHome}>
        <Stack.Screen options={{ header: () => <HomeHeader /> }} />
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        </ScrollView> */}
        <ThemedView style={styles.houseNearBy}>
          <ThemedView style={styles.nearByHeader}>
            <ThemedText style={styles.nearBy}>New Homes Nearby</ThemedText>
            <Pressable>
              <ThemedText style={{styles.seeAll}}>See all</ThemedText>
            </Pressable>
          </ThemedView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >

          </ScrollView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHome: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  houseNearBy: {
    gap: 5,
  },
  nearByHeader: {
    flexDirection: "row",
    justifyContent:  "space-between"
  },
  nearBy: {
    fontSize: 20,
  }
});