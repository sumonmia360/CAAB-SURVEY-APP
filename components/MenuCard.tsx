import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface cardProps {
  id: number;
  title: string;
  icon: string;
  url: string;
}

const MenuCard = ({ id, title, icon, url }: cardProps) => {
  return (
    <Link href={url} className="w-[45%] border rounded-lg h-full  ">
      <View className="flex w-full items-center justify-center ">
        {/* <Image source={require(icon)} className="size-20 "></Image> */}
        <Text className="font-bold">{title}</Text>
      </View>
    </Link>
  );
};

export default MenuCard;

const styles = StyleSheet.create({});
