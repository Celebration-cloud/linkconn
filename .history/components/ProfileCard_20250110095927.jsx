import { Button, Card, Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

const ProfileCard = () => {
    useTheme
  return (
    <Card containerStyle={styles.card}>
      <Card.Title>Listing Agent</Card.Title>
      <Card.Divider />
      <ThemedView>
        <Card.Image
          resizeMode="stretch"
          style={styles.image}
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
        />
        <ThemedView>
          <ThemedText style={styles.name}>Emma Grace</ThemedText>
          <ThemedText style={styles.title}>Partner</ThemedText>
        </ThemedView>
      </ThemedView>

      <Card.Divider />
      <ThemedText style={styles.overview}>Overview</ThemedText>
      <ThemedText style={styles.description}>
        Emma Grace is a passionate Listing Agent, known for her in-depth
        consulting skills and understanding of the real estate market. She is
        dedicated to helping clients find and sell homes, providing optimal
        solutions to achieve their goals.
      </ThemedText>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#517fa4',
    borderRadius: 5,
  },
});

export default ProfileCard;
