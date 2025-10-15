import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const notFoundPage
 = () => {
  return (
    <View>
      <Text>This page is not found  sorry!
      </Text>
      <Pressable >
  <Link href={"/(tabs)"} >Go to the home</Link>
</Pressable>
    </View>
  )
}

export default notFoundPage


const styles = StyleSheet.create({})