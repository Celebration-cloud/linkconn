import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchInput = () => {
  return (
    <ThemedView style={styles.inputContainer}>
            <Searchbar
              placeholder="Search"
              style={{
                backgroundColor: tintColor,
                borderRadius: 10,
                width: "100%",
              }}
            />
          </ThemedView>
  )
}

export default SearchInput

const styles = StyleSheet.create({})