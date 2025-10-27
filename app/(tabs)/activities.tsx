import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Activities = () => {
  return (
    <View style={styles.div1}>
      <Text className="text-4xl text-yellow-500">Activites</Text>
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  div1: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
