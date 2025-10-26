import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, View } from "react-native";
// className =
//   "flex flex-row w-full flex-1  rounded-lg  overflow-hidden justify-center items-center min-h-16 mt-4 min-w-[120px]";
const TabIcon = ({ focused, title, icon }: any) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          source={images.highlight}
          className="flex flex-row w-full flex-1  rounded-full  overflow-hidden justify-center items-center min-h-14 mt-4 min-w-[70px]"
        >
          <Image source={icon} tintColor="#FFFFFF" className="size-6" />
          {/* <Text className="text-white  text-base font-semibold ml-2">
            {title}
          </Text> */}
        </ImageBackground>
      </>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#FFFFFF" className="size-6"></Image>
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, 
        tabBarIconStyle: {
          width: "100%",
          height: "70%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#252525",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 10,
          height: 60,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Home" icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          headerShown: false,
          title: "Activities",
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Activities" icon={icons.activities} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Contact" icon={icons.contact} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
         
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Profile" icon={icons.person} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
