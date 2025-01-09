import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Button } from '@rneui/base'

const DetailsLayout = () => {
  return (
    <Stack>
        <Stack.Screen options={{headerRight: () => (
            <View style={styles.headerLeft}>
                <Button></Button>
            </View>
        )}}/>
    </Stack>
  )
}

export default DetailsLayout

const styles = StyleSheet.create({})