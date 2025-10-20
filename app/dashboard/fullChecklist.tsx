import SingleTable from "@/components/SingleTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  ScrollView,
  Text,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const FullChecklist = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  // const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`http://192.168.88.235:8090/api/questions`, {
        withCredentials: true,
      })
      .then((res: any) => {
        if (res.data) {
          setQuestions(res.data);
        }
      });
    axios
      .get(`http://192.168.88.235:8090/api/subjects`, {
        withCredentials: true,
      })
      .then((res: any) => {
        if (res.data) {
          setSubjects(res.data);
        }
      });
  }, []);
  let subjectWaseQuestionsArray: any = [];
  for (let i = 0; i < subjects.length; i++) {
    let subjectWaseQuestions = questions.filter(
      (q) => q.subject_name === subjects[i]?.name
    );

    subjectWaseQuestionsArray.push(subjectWaseQuestions);
  }

  let withoutNullSubjectWaseQuestionsArray = subjectWaseQuestionsArray.filter(
    (item: any) => item.length > 0
  );
  subjectWaseQuestionsArray = withoutNullSubjectWaseQuestionsArray;

  // const [form, setForm] = useState({
  //   subject: "",
  //   questionText: "",
  //   reference: "",
  //   mark: "",
  //   remark: "",
  // });

  // const onPress = () => {
  //   setModalVisible(true);
  // };

  // const handleSave = () => {
  //   // add to local list
  //   setQuestions((prev) => [...prev, { ...form, id: Date.now().toString() }]);
  //   setForm({
  //     subject: "",
  //     questionText: "",
  //     reference: "",
  //     mark: "",
  //     remark: "",
  //   });
  //   setModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setForm({
  //     subject: "",
  //     questionText: "",
  //     reference: "",
  //     mark: "",
  //     remark: "",
  //   });
  //   setModalVisible(false);
  // };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-4 text-center  ">
        <Text className="text-3xl font-extrabold text-center border-b-2 pb-2 mb-4">
           Survey Question
        </Text>
        {/* <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text className="text-white text-xl font-semibold ">
            + Add Question
          </Text>
        </TouchableOpacity> */}

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCancel}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Add New Question</Text>

              {addQuestionFildesTexts.map((field) => (
                <View key={field.key} style={{ marginBottom: 8 }}>
                  <Text>{field.label}</Text>
                  <InputField
                    style={styles.input}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChangeText={(text: string) =>
                      setForm((p) => ({ ...p, [field.key]: text }))
                    }
                    multiline
                  />
                </View>
              ))}

              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.actionButton, styles.cancelButton]}
                  onPress={handleCancel}
                >
                  <Text style={styles.actionText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.actionButton, styles.saveButton]}
                  onPress={handleSave}
                >
                  <Text style={styles.actionText}>Add Question</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal> */}
        {questions.length === 0 ? (
          <View className="flex-1 justify-center items-center ">
            <Text className="text-2xl text-center">No Question added yet!</Text>
          </View>
        ) : (
          <ScrollView className="">
            {subjectWaseQuestionsArray.map(
              (subjectWaseQuestionsData: any, idx: any) => (
                <SingleTable
                  key={idx}
                  {...{ subjectWaseQuestionsData }}
                ></SingleTable>
              )
            )}
          </ScrollView>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#040D26",
//     padding: 10,
//     marginRight: 10,
//     marginLeft: 10,
//     borderRadius: 20,
//     marginTop: 10,
//   },
//   countContainer: {
//     alignItems: "center",
//     padding: 10,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//     padding: 20,
//   },
//   modalView: {
//     width: "100%",
//     backgroundColor: "white",
//     borderRadius: 8,
//     padding: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 18,
//     textAlign: "center",
//     fontWeight: "700",
//     marginBottom: 12,
//   },
//   input: {
//     minHeight: 40,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 12,
//     textAlignVertical: "top",
//   },
//   modalButtons: {
//     flexDirection: "row",
//     justifyContent: "center",
//     gap: 10,
//   },
//   actionButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   saveButton: {
//     backgroundColor: "#040D26",
//   },
//   cancelButton: {
//     backgroundColor: "#6b7280",
//     marginLeft: 8,
//   },
//   actionText: {
//     color: "white",
//     fontWeight: "600",
//   },
// });

export default FullChecklist;
