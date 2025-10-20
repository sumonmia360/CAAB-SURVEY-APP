import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
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

const TableExample = ({ subjectWaseQuestions }: any) => {
//   console.log(subjectWaseQuestions);
  return (
    <ScrollView horizontal={true}>
      
      <DataTable className="border mt-5  w-[50%]">
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title >Question</DataTable.Title>
          <DataTable.Title>Ref Code</DataTable.Title>
          <DataTable.Title>Mark</DataTable.Title>
          <DataTable.Title>Remarks</DataTable.Title>
        </DataTable.Header>
        {subjectWaseQuestions.map((question: Question) => (
          <DataTable.Row key={question.id} className="border w-[50%] text-wrap">
            <DataTable.Cell className="">{question.question_text}</DataTable.Cell>
            <DataTable.Cell>{question.ref_to_ano}</DataTable.Cell>
            <DataTable.Cell>{question.mark}</DataTable.Cell>
            <DataTable.Cell>{question.remarks}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

export default TableExample;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
    width: '50%',
  },
});
