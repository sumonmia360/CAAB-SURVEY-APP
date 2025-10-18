import { addQuestionFildesTexts } from "@/jsons/AddQuestionData";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const FullChecklist = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    subject: "",
    questionText: "",
    reference: "",
    mark: "",
    remark: "",
  });

  const onPress = () => {
    setModalVisible(true);
  };

  const handleSave = () => {
 
    // console.log("Saved question form:", form);
    setForm({ subject: "", questionText: "", reference: "", mark: "", remark: "" });
    setModalVisible(false);
  };

  const handleCancel = () => {
    setForm({ subject: "", questionText: "", reference: "", mark: "", remark: "" });
    setModalVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 text-center px-4">
        <Text className="text-3xl font-extrabold text-center ">
          Add a Survey Question
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text className="text-white text-xl font-semibold">
            + Add Question
          </Text>
        </TouchableOpacity>

        <Modal
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
                    onChangeText={(text: string) => setForm((p) => ({ ...p, [field.key]: text }))}
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
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// Reusable input field component to follow DRY principle
const InputField = ({ value, onChangeText, placeholder, style, multiline }: any) => {
  return (
    <RNTextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={style}
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#040D26",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 12,
  },
  input: {
    minHeight: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: "#040D26",
  },
  cancelButton: {
    backgroundColor: "#6b7280",
    marginLeft: 8,
  },
  actionText: {
    color: "white",
    fontWeight: "600",
  },
});

export default FullChecklist;
