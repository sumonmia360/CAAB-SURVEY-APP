import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const contact = () => {
  return (
    <View style= {styles.div1}>
      <Text className='text-4xl text-yellow-500'>contact</Text>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({div1 : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }})