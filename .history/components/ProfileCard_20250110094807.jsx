import { Card } from '@rneui/base';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ProfileCard = () => {
  return (
    <Card containerStyle={styles.card}>
      <Card.Title>Listing Agent</Card.Title>
      <Card.Divider/>
      <Image
        style={styles.image}
        source={{uri: 'https://your-image-url.com/emma-grace.jpg'}}
      />
      <Text style={styles.name}>Emma Grace</Text>
      <Text style={styles.title}>Partner</Text>
      <Card.Divider/>
      <Text style={styles.overview}>Overview</Text>
      <Text style={styles.description}>
        Emma Grace is a passionate Listing Agent, known for her in-depth consulting skills and understanding of the real estate market. She is dedicated to helping clients find and sell homes, providing optimal solutions to achieve their goals.
      </Text>
      <View style={styles.iconsContainer}>
        <Icon
          name='message'
          type='material'
          color='#517fa4'
          containerStyle={styles.icon}
        />
        <Icon
          name='call'
          type='material'
          color='#517fa4'
          containerStyle={styles.icon}
        />
      </View>
      <Button
        title="Contact Me"
        buttonStyle={styles.button}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
