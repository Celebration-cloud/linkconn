import React from 'react'

import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native';

import { Stack } from 'expo-router'

import { TouchableRipple } from 'react-native-paper';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import CardComponent from '@/components/CardComponent'

import HomeHeader from '../../../../components/HomeHeader'

const HomeScreen = () => {
  const background = useThemeColor([], "background")
  const tint = useThemeColor([], "tint")
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: background,
      }}
      scroll
    >
      <ThemedView style={styles.containerHome}>
        <Stack.Screen options={{ header: () => <HomeHeader /> }} />
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        </ScrollView> */}
        <ThemedView style={styles.houseNearBy}>
          <ThemedView style={styles.nearByHeader}>
            <ThemedText style={styles.nearBy}>New Homes Nearby</ThemedText>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
              <ThemedText
                style={{ ...styles.seeAll, color: "rgba(3, 148, 251, 0.7)" }}
              >
                See all
              </ThemedText>
            </TouchableRipple>
          </ThemedView>
          <ScrollView
            horizontal
            contentContainerStyle={styles.listNearByScroll}
            showsHorizontalScrollIndicator={false}
          >
           <CardComponent />
           <CardComponent />
           <CardComponent />
          </ScrollView>
        </ThemedView>
        <ThemedView style={styles.houseNearBy}>
          <ThemedView style={styles.nearByHeader}>
            <ThemedText type={} style={styles.nearBy}>Our Recommendations</ThemedText>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
              <ThemedText
                style={{ ...styles.seeAll, color: "rgba(3, 148, 251, 0.7)" }}
              >
                See all
              </ThemedText>
            </TouchableRipple>
          </ThemedView>
          <ScrollView
            horizontal
            contentContainerStyle={styles.listNearByScroll}
            showsHorizontalScrollIndicator={false}
          >
            <CardComponent/>
          </ScrollView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
  },
  containerHome: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    gap: 30
  },
  houseNearBy: {
    gap: 5,
  },
  nearByHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nearBy: {
    fontSize: 20,
  },
  listNearByScroll: {
    paddingHorizontal: 0,
    gap: 15,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 0,
    width: Dimensions.get("window").width / 1.2,
    height: Dimensions.get("window").height / 2.4,
    borderRadius: 10,
    padding: 10
  },

  groupBtn: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    gap: 3
  },
  cardBtn: {
    width: Dimensions.get("window").width /3.7
  }
});