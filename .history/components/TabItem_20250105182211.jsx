import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tab } from '@rneui/base'

const TabItem = ({index, setIndex, tabItems}) => {
  return (
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      titleStyle={{
        fontFamily: "Inter_500Medium",
        fontSize: 5,
        color: textColor,
      }}
      containerStyle={{ backgroundColor: "rgba(255, 29, 29, 0.56)", gap: 1 }}
      disableIndicator
    >
      {tabItems.map((item, i) => (
        <Tab.Item
          title={"Home"}
          containerStyle={{}}
          buttonStyle={(active) => ({
            backgroundColor: active ? tabIconSelected : backgroundColor,
            borderRadius: 20,
            padding: 5,
            margin: 0,
            fontFamily: "Inter_400Regular",
            width: 110,
          })}
          titleStyle={(active) => ({
            color: active ? backgroundColor : textColor,
          })}
        />
      ))}

      <Tab.Item
        title="Home"
        containerStyle={{}}
        buttonStyle={(active) => ({
          backgroundColor: active ? tabIconSelected : backgroundColor,
          borderRadius: 20,
          padding: 5,
          margin: 0,
          fontFamily: "Inter_400Regular",
          width: 110,
        })}
        titleStyle={(active) => ({
          color: active ? backgroundColor : textColor,
        })}
      />
      <Tab.Item
        title="Open Homes"
        containerStyle={{}}
        buttonStyle={(active) => ({
          backgroundColor: active ? tabIconSelected : backgroundColor,
          borderRadius: 20,
          padding: 5,
          margin: 0,
          width: 110,
        })}
        titleStyle={(active) => ({
          color: active ? backgroundColor : textColor,
          fontSize: 13,
          fontFamily: "Inter_400Regular",
          paddingLeft: 0,
          paddingRight: 0,
        })}
      />
      <Tab.Item
        title="Searches"
        containerStyle={{
          backgroundColor: backgroundColor,
        }}
        buttonStyle={(active) => ({
          backgroundColor: active ? tabIconSelected : backgroundColor,
          borderRadius: 20,
          padding: 5,
          margin: 0,
          width: 110,
        })}
        titleStyle={(active) => ({
          color: active ? backgroundColor : textColor,
          fontSize: 13,
          fontFamily: "Inter_400Regular",
          paddingLeft: 0,
          paddingRight: 0,
        })}
      />
    </Tab>
  );
}

export default TabItem

const styles = StyleSheet.create({})