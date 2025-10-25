import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Row, Table } from "react-native-table-component";
interface Question {
  id: number;
  number: number;
  question_text: string;
  ref_to_ano: string;
  subject_name: string;
  mark: number;
  na: number;
  no: boolean;
  ns: boolean;
  s: boolean;
  remarks: string;
}

const SingleTable = ({ subjectWaseQuestionsData }: any) => {
  const tableHead = ["No.", "Question", "Ref Code", "Mark", "Remarks"];

  const subJectNameSet = subjectWaseQuestionsData[0].subject_name;

  return (
    <View style={styles.container}>
      <Text className="text-2xl mb-2">{subJectNameSet}</Text>
      <ScrollView horizontal={true}>
        <View>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={tableHead}
                widthArr={[50, 701, 150, 70, 201]}
                style={styles.head}
                textStyle={styles.text1}
              />
              {subjectWaseQuestionsData.map((question2: Question,idx:number) => (
                <Row
                  key={question2.id}
                  widthArr={[50, 701, 150, 70, 201]}
                  textStyle={styles.text}
                  data={[
                    idx+1,

                    question2.question_text,
                    question2.ref_to_ano,
                    question2.mark,
                    question2.remarks,
                  ]}
                ></Row>
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleTable;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 30,
  },
  head: { height: 40, backgroundColor: "#f1f8ff", fontWeight: "black" },
  text: { margin: 6, fontWeight: "black" },
  text1: { margin: 6, fontWeight: "black", fontSize: 18 },
});
