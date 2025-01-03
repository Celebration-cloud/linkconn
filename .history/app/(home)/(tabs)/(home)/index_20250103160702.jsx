import React from 'react'

import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

import HomeHeader from '../../../../components/HomeHeader'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScrollView } from 'react-native';
import { Button, Card, TouchableRipple } from 'react-native-paper';
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
              </Card.Content>
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
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
    justifyContent:  "space-between"
  },
  nearBy: {
    fontSize: 20,
  }
});