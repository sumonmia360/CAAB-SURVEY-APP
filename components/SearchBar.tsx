import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
interface props {
  placeholder: string;
  onPress?: () => void;
}
const SearchBar = ({ placeholder, onPress }: props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4s">
      <Image
        source={icons.search}
        className="size-5 "
        tintColor="#ab8bff"
        resizeMode="contain"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
