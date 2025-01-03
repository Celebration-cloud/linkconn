import React from 'react'

import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import HomeHeader from '../../../../components/HomeHeader'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScrollView } from 'react-native';
import { Button, TouchableRipple } from 'react-native-paper';
import { Card } from '@rneui/base';
const HomeScreen = () => {
  const background = useThemeColor([], "background")
  const tint = useThemeColor([], "tint")
  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        backgroundColor: background,
      }}
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
            <Card
              containerStyle={{
                backgroundColor: background,
                borderColor: tint,
                ...styles.card,
              }}
            >
              <Card.Image
                source={{
                  uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                }}
                style={{ borderRadius: 10, width: "100%" }}
              />
              <ThemedText>Charming Family Home</ThemedText>
              <ThemedText>
                Located in a quiet suburb with 3 bedrooms and 2 bathrooms.
              </ThemedText>
              <ThemedText>$1,200/month</ThemedText>
              <ThemedView style={styles.groupBtn}>
                <Button buttonColor='' mode='contained'>Details</Button>
                <Button mode='contained'>Contact</Button>
                <Button mode='contained' icon="heart"></Button>
              </ThemedView>
            </Card>
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
    justifyContent: "space-between",
  },
  nearBy: {
    fontSize: 20,
  },
  listNearByScroll: {
    paddingHorizontal: 0,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 0,
    width: Dimensions.get("window").width / 1.4,
    height: Dimensions.get("window").height / 2.5,
    borderRadius: 10,
    padding: 10
  },
  groupBtn: {
    flexDirection: "row",
    justifyContent
  }
});