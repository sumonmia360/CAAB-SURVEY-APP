import React from 'react';
import { StyleSheet, Text } from 'react-native';
interface Question {
  id: number;
  number: number;
  question_text: string;
  question_text_rich_text: any;
  ref_to_ano: string;
  subject_name: string;
  mark: number;
  na: number;
  no: boolean;
  ns: boolean;
  s: boolean;
  remarks: string;
}

const DangerHtml = ({question2}:any) => {
    console.log(question2);
  return (
    <>
      <Text>DangerHtml</Text>
    </>
  )
}

export default DangerHtml

const styles = StyleSheet.create({})