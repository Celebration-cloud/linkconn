import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/base';

const Index = () => {
  return (
    <View>
      <Text>Linkconn</Text>
      <Text>Discover skilled individuals in your community</Text>
      <View>
        
      </View>
      <Image
        source={require('../../assets/images/Meeting.gif')}
        style={{width: '100%', height: '100%'}}
      />
      <Button title="Get Started" radius="lg" />
    </View>
  );
}

export default Index

const styles = StyleSheet.create({})