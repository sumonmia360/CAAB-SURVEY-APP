import { images } from "@/constants/images";
import { useRouter } from "expo-router";

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const DemoPage = () => {
  const ChangeRoute = useRouter();
  const handleNavigateHome = () =>{
    ChangeRoute.push("/")

  }
  return (
    <View className="flex-1  items-center gap-5 ">
      <Image source={images.projectLogo} className="w-40 h-40 mt-60 " />
      <Text className="text-4xl font-extrabold text-center">
        Work is in progress{"\n"} on this page.
      </Text>
      <TouchableOpacity onPress={handleNavigateHome } className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        {/* <Link
          href={"/"}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
        > */}
          <Text>Go to the home</Text>
        {/* </Link> */}
      </TouchableOpacity>
    </View>
  );
};

export default DemoPage;
