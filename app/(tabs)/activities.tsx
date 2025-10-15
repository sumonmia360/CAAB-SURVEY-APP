import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const activities = () => {
  return (
    <View style={styles.div1}>
      <Text className='text-4xl text-green-700'>activities</Text>
    </View>
  )
}

export default activities

const styles = StyleSheet.create({
    div1 : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})