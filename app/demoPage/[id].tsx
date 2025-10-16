import { images } from '@/constants/images'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const demoPage
 = () => {
  return (
    <View className='flex-1  items-center gap-5  '>
       <Image
      source={images.projectLogo}
      className="w-40 h-40 mt-60 "
      />{" "}
      <Text className='text-4xl font-extrabold'>Work is in progress{"\n"}    on this page.
      </Text>
      <Pressable  >
  <Link href={"/"} className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ' >
  Go to the home</Link>
</Pressable>
    </View>
  )
}

export default demoPage


