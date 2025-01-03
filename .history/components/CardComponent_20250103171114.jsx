import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardComponent = () => {
    
  return (
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
        <Button background="blue" mode="contained" style={styles.cardBtn}>
          Details
        </Button>

        <Button style={styles.cardBtn} mode="contained">
          Contact
        </Button>
        <Button style={styles.cardBtn} mode="contained">
          <Ionicons name="heart-sharp" size={20} />
        </Button>
      </ThemedView>
    </Card>
  );
}

export default CardComponent

const styles = StyleSheet.create({})