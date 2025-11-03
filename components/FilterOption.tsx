import { useGroupMainArray } from "@/store/store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface chapterType {
  id: number;
  name: string;
}

const FilterOption = () => {
  const [selectBtnText, setSelectBtnText] = useState("Select All");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [chapterFilter, setChapterFilter] = useState("All Chapter");
  const [chaptersArray, setChaptersArray] = useState([]);
  const [chapterIdsArray, setChapterIdsArray] = useState<number[]>([]);
  const selectedAllId = useGroupMainArray((state) => state.setArrayC);
  // const mainArray = useGroupMainArray((state) => state.idArray);
  useEffect(() => {
    let newChaptersArray: number[] = [];
    axios.get("http://192.168.88.235:8020/api/chapters/").then((res: any) => {
      if (res.data) {
        console.log("Filter UseEffect Call:--");
        setChaptersArray(res.data);
        const puchingChaptersIds = chaptersArray.map((chapter: chapterType) => {
          newChaptersArray.push(chapter.id);
        });
      }
    });
    setChapterIdsArray(newChaptersArray);
  }, []);

  const onPress = () => {
    setModalVisible(true);
  };
  const handleSelect = () => {
    if (selectBtnText === "Select All") {
      setSelectBtnText("Deselect All");
      selectedAllId(chapterIdsArray);
    } else {
      setSelectBtnText("Select All");
      selectedAllId([]);
    }
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleChangeChapter = (chapterName: string, chapterId: number) => {
    console.log(chapterId, chapterName);
    setChapterFilter(chapterName);
    setModalVisible(false);
  };
  console.log("ChapterIdsArray:",chapterIdsArray);
  // console.log("selectBtnText:",selectBtnText);
  // console.log("Global Main Array", mainArray);
  return (
    <View className="flex gap-1  bg-white p-2 rounded-2xl mb-2">
      <Text className="text-2xl font-semibold">Filter</Text>
      <View className="flex-row justify-between items-center gap-4 ">
        <View
          className="flex flex-row justify-between gap-3  "
          style={{ width: 220 }}
        >
          <TouchableOpacity onPress={onPress}>
            <View className="rounded-lg justify-center" style={styles.input}>
              <Text className="ml-3">{chapterFilter}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* SELECT BTN */}
        <Pressable>
          <View
            style={styles.button}
            className={`rounded-lg text-gray-500  ${selectBtnText === "Deselect All" ? "bg-green-500 " : "bg-[#DDDDDD] "}`}
          >
            <Text onPress={handleSelect}>{selectBtnText}</Text>
          </View>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView persistentScrollbar={true} className="p-2">
              {chaptersArray.map((chapter: chapterType, idx: any) => (
                <Pressable
                  key={idx}
                  onPress={() => handleChangeChapter(chapter.name, chapter.id)}
                >
                  {chapter.id === 1 ? (
                    <Text
                      onPress={() => handleChangeChapter("All Chapter", 0)}
                      style={styles.modalTitle}
                    >
                      All Chapter
                    </Text>
                  ) : (
                    <></>
                  )}
                  <Text style={styles.modalTitle}>{chapter.name}</Text>
                </Pressable>
              ))}
            </ScrollView>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.actionButton, styles.cancelButton]}
                onPress={handleCancel}
              >
                <Text style={styles.actionText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FilterOption;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    width: 230,
  },
  button: {
    alignItems: "center",

    padding: 10,
    height: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#040D26",
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  centeredView: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    height: 300,
    marginLeft: 20,
    marginTop: 135,
    width: 230,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "700",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
    padding: 5,
  },
  input2: {
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
  btnText: { textAlign: "center", color: "#fff" },
});
