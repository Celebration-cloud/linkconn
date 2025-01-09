import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DetailsLayout = () => {
  return (
    <Stack>
        <Stack.Screen options={{headerRight: () => (
            <View style={styles.headerLeft}>
                <But
            </View>
        )}}/>
    </Stack>
  )
}

export default DetailsLayout

const styles = StyleSheet.create({})