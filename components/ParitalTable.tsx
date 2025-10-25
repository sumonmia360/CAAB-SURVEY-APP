import { useGroupMainArray } from "@/store/store";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { Row, Table } from "react-native-table-component";
interface Question {
  id: number;
  number: number;
  question_text: string;
  question_text_rich_text: string;
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
  const setIdArray = useGroupMainArray((state) => state.setArrayA);
  const setEmtyIdArray = useGroupMainArray((state) => state.setArrayB);
  const idArrayValues = useGroupMainArray((state) => state.idArray);
  const { width } = useWindowDimensions();
  const htmlTest: string = `<body style="background-color: lightblue;">

<h1>Hello World!</h1>

<p>This page has a light blue background color!</p>

</body>`;
  const subJectNameSet = subjectWaseQuestionsData[0].subject_name;
  const addIdInArrya = (id: number) => {
    const NewId = idArrayValues.includes(id);
    // console.log(NewId);
    if (!NewId) {
      // console.log(id);
      setIdArray(id);
    } else {
      const removeItiem = idArrayValues.filter(
        (elementsA: number) => elementsA !== id
      );
      setEmtyIdArray(removeItiem);
    }
  };
  const addGroupBtn = (question2: Question) => {
    const id = question2.id;
    addIdInArrya(id);
  };
  // console.log(idArray);

  return (
    <View style={styles.container}>
      <Text className="text-xl capitalize font-bold">{subJectNameSet}</Text>
      <ScrollView horizontal={true}>
        <View>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={tableHead}
                widthArr={[75, 601, 150, 70, 201]}
                style={styles.head}
                textStyle={styles.text1}
              />
              {subjectWaseQuestionsData.map((question2: Question) => (
                <Row
                  key={question2.id}
                  widthArr={[70, 601, 150, 70, 201]}
                  textStyle={styles.text}
                  style={styles.rowStyleQ}
                  data={[
                    <TouchableOpacity
                      key={question2.id}
                      className="flex  justify-center items-center "
                      onPress={() => addGroupBtn(question2)}
                    >
                      <View
                        className={`bg-[#78B7BB] ${idArrayValues.includes(question2.id) ? "bg-green-500" : "bg-[#78B7BB]"} h-8 w-[55px] items-center justify-center `}
                      >
                        {idArrayValues.includes(question2.id) ? (
                          <Text style={styles2.btnText}>Selected!</Text>
                        ) : (
                          <Text style={styles2.btnText}>+Add</Text>
                        )}
                      </View>
                    </TouchableOpacity>,
                    <Text key={question2.id} className="p-5">
                      {question2.question_text_rich_text ? (
                        <RenderHtml
                          enableExperimentalMarginCollapsing={true}
                          key={question2.id}
                          contentWidth={width}
                          source={{ html: htmlTest }}
                        />
                      ) : (
                        question2.question_text
                      )}
                    </Text>,

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
    paddingTop: 4,
    marginTop: 5,
  },
  head: { height: 40, backgroundColor: "#f1f8ff", fontWeight: "black" },
  text: { margin: 6, fontWeight: "black" },
  text1: { margin: 6, fontWeight: "black", fontSize: 18 },
  rowStyleQ: { padding: 5 },
});

const styles2 = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btnText: { textAlign: "center", color: "#fff" },
});
const tagsStyles = {
  table: { borderWidth: 1, borderColor: "#000", width: "100%" },
  th: { backgroundColor: "#f2f2f2", padding: 4 },
  td: { padding: 4, textAlign: "center" },
};

const kotikotiData: string =
  '<p>Is the width of the runway less than the appropriate dimension specified in the following tabulation:</p><figure class="table" style="float:left;"><table><tbody><tr><td style="padding:0in 9.0pt;vertical-align:top;"><ol><li>Is the width of the runway less than the appropriate dimension specified in the following tabulation:</li><li>&nbsp;</li></ol><figure class="table"><table style="border-style:none;"><tbody><tr><td style="border-color:windowtext;border-width:1.0pt;height:24.15pt;padding:0in 5.4pt;vertical-align:top;width:37.65pt;"><p style="text-align:center;">--</p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:24.15pt;padding:0in 5.4pt;vertical-align:top;width:178.25pt;" colspan="4">&nbsp; &nbsp; &nbsp; Outer Main Gear Wheel Span (OMGWS)</td></tr><tr><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:57.4pt;padding:0in 5.4pt;vertical-align:top;width:37.65pt;"><p><sub>&nbsp; Code</sub></p><p><sub>number</sub></p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:57.4pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p><sub>&nbsp; &nbsp; &nbsp; Up to but</sub></p><p><sub>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;not&nbsp;</sub></p><p><sub>&nbsp; &nbsp; &nbsp;including&nbsp;</sub></p><p><sub>&nbsp; &nbsp; &nbsp; &nbsp;4.5m</sub></p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:57.4pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p><sub>&nbsp; &nbsp; &nbsp;4.5m up&nbsp;</sub></p><p><sub>&nbsp;to but not&nbsp;</sub></p><p><sub>&nbsp; &nbsp; &nbsp;including&nbsp;</sub></p><p><sub>&nbsp; &nbsp; &nbsp; &nbsp; 6m</sub></p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:57.4pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p><sub>6m up to&nbsp;</sub></p><p><sub>&nbsp;but not</sub></p><p><sub>including&nbsp;</sub></p><p><sub>&nbsp; &nbsp; &nbsp; &nbsp;9m</sub></p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:57.4pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p><sub>9m up to</sub></p><p><sub>&nbsp;but not</sub></p><p><sub>including&nbsp;</sub></p><p><sub>&nbsp; &nbsp; &nbsp; 15m</sub></p></td></tr><tr><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:14.85pt;padding:0in 5.4pt;vertical-align:top;width:37.65pt;"><p>&nbsp; &nbsp;</p><p>&nbsp; &nbsp; 1⁰</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.85pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp;18 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.85pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp;18 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.85pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp;23 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.85pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;">&nbsp; &nbsp; &nbsp; &nbsp; -</td></tr><tr><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:37.65pt;"><p>&nbsp; &nbsp;</p><p>&nbsp; &nbsp; 2⁰</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp;23 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp;23 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp;30 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;">&nbsp; &nbsp; &nbsp; &nbsp; -</td></tr><tr><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:22.55pt;padding:0in 5.4pt;vertical-align:top;width:37.65pt;"><p style="text-align:center;">&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp;3⁰</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:22.55pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp;30 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:22.55pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp;30 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:22.55pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p>&nbsp; &nbsp;</p><p>&nbsp; &nbsp;30 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:22.55pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p>&nbsp; &nbsp;</p><p>&nbsp; &nbsp; 45 m</p></td></tr><tr><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:37.65pt;"><p style="text-align:center;">&nbsp;</p><p>&nbsp; &nbsp; 4⁰</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp;-</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:47.2pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp;-</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p>&nbsp; &nbsp;</p><p>&nbsp; &nbsp;45 m</p></td><td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:20.4pt;padding:0in 5.4pt;vertical-align:top;width:41.9pt;"><p>&nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; 45 m</p></td></tr></tbody></table></figure><p>a) The width of a prevision approach runway shall be not less than 30m where the code number 1 or 2.</p></td></tr></tbody></table></figure>';
