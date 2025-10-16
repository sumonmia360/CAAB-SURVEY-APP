import { images } from "@/constants/images";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const notFoundPage = () => {
  return (
    <View className="flex-1  items-center gap-5 ">
      <Image source={images.projectLogo} className="w-40 h-40 mt-60" />{" "}
      <Text className="text-5xl font-extrabold ">404 Not Found!</Text>
      <Pressable>
        <Link
          href={"/"}
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Go to the home
        </Link>
      </Pressable>
    </View>
  );
};

export default notFoundPage;
