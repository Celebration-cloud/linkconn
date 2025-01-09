import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
const ProfileScreen = () => {
  return (
    <ThemedView>
      <ThemedText>ProfileScreen</ThemedText>
    </ThemedView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  import { connect } from 'react-redux'
  import component from 'componentPath'
  import {actionCreator} from 'actionCreatorPath'
  
  const mapStateToProps = (state, ownProps) => {
    return {
      prop: state.prop
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      dispatch1: () => {
        dispatch(actionCreator)
      }
    }
  }
  
  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
      mergeProp: mergePropVal
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)
})