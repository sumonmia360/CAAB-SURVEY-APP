import React from "react";
import { StyleSheet, View } from "react-native";

const CheckListTablesData = ({ subjectWaseQuestions }: any) => {
  // console.log(subjectWaseQuestions);

  return (
    <View style={styles.container}>
      {/* <SingleTable subjectWaseQuestins={subjectWaseQuestions}></SingleTable> */}
    </View>
  );
};

export default CheckListTablesData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 30,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6, width: 191, minWidth: 191 },
});
