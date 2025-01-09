import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DetailsLayout = () => {
  return (
    <Stack>
        <Stack.Screen options={{headerLeft: () => (
            <View style={styles.headerLeft}>
                <Text style={styles.headerLeftText}>Back</Text>
            </View>
        )}}/>
    </Stack>
  )
}

export default DetailsLayout

const styles = StyleSheet.create({})