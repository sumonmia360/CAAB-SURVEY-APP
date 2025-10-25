import { surveyGroupInsData } from "@/jsons/SurveryGroupIns";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GroupCreateRuls = () => {
  return (
    <View className="border my-4 rounded-md p-2 bg-[#F9F9F9]">
      <Text className="font-extrabold text-2xl">
        How to Create a Question Group
      </Text>
      <Text className="mb-3 font-bold">
        Follow these steps to group questions for surveys:
      </Text>
      {surveyGroupInsData.map((insData, idx) => (
        <Text key={idx} className="mb-1">
          {insData}
        </Text>
      ))}
    </View>
  );
};

export default GroupCreateRuls;

const styles = StyleSheet.create({});
