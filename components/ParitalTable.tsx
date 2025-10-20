import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

const ParitalTable = ({ subjectWaseQuestionsData }: any) => {
  const tableHead = ["Select", "Question", "Ref Code", "Mark", "Remarks"];

  const [idArray, setIdArray] = useState<any[]>([]);

  const subJectNameSet = subjectWaseQuestionsData[0].subject_name;
  const addIdInArrya = (id: number) => {
    const NewId = idArray.includes(id);
    if (!NewId) {
      setIdArray((ary) => [...ary, id]);
    } else {
      const removeItiem = idArray.filter((elementsA) => elementsA !== id);
      setIdArray(removeItiem);
    }
  };
  const addGroupBtn = (question2: Question) => {
    const id = question2.id;
    addIdInArrya(id);
  };
  console.log(idArray);

  return (
    <View style={styles.container}>
      <Text className="text-2xl mb-2 capitalize font-bold">
        {subJectNameSet}
      </Text>
      <ScrollView horizontal={true}>
        <View>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={tableHead}
                widthArr={[70, 201, 150, 70, 201]}
                style={styles.head}
                textStyle={styles.text1}
              />
              {subjectWaseQuestionsData.map((question2: Question) => (
                <Row
                  key={question2.id}
                  widthArr={[70, 201, 150, 70, 201]}
                  textStyle={styles.text}
                  data={[
                    <TouchableOpacity
                      key={question2.id}
                      onPress={() => addGroupBtn(question2)}
                    >
                      <View
                        className={`bg-[#78B7BB] ${idArray.includes(question2.id) ? "bg-green-500" : "bg-[#78B7BB]"} h-10 items-center justify-center `}
                      >
                        {idArray.includes(question2.id) ? (
                          <Text style={styles2.btnText}>Selected!</Text>
                        ) : (
                          <Text style={styles2.btnText}>+Add</Text>
                        )}
                      </View>
                    </TouchableOpacity>,

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

export default ParitalTable;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 30,
  },
  head: { height: 40, backgroundColor: "#f1f8ff", fontWeight: "black" },
  text: { margin: 6, fontWeight: "black" },
  text1: { margin: 6, fontWeight: "black", fontSize: 18 },
});

const styles2 = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btnText: { textAlign: "center", color: "#fff" },
});
