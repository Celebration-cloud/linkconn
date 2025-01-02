import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/base';

const Index = () => {
  return (
    <View c>
      <Text style={styles.title}>Linkconn</Text>
      <Text style={styles.subTitle}>Discover skilled individuals in your community</Text>
      <View style={styles.imageContainer}>


      <Image
        source={require('../../assets/images/Meeting.gif')}
        style={{width: '100%', height: '100%'}}
      />
      </View>
      <Button title="Get Started" radius="lg" />
    </View>
  );
}

export default Index

const styles = StyleSheet.create({})