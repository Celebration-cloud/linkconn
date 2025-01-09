import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Button } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'

const DetailsLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="details" options={{headerRight: () => (
            <View style={styles.headerLeft}>
                <Button size='lg'><Ionicons name='heart' size={20}/></Button>
            </View>
        )}}/>
    </Stack>
  )
}

export default DetailsLayout

const styles = StyleSheet.create({})