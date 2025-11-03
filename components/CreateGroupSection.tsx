import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreateGroupSection() {
  const [groupName, setGroupName] = useState("");
  const [selectedAirport, setSelectedAirport] = useState("osmani");

  const handleCreateGroup = () => {
    if (!groupName) return;
    // console.log("Creating group:", groupName, selectedAirport);
  };

  return (
    <View className="bg-white rounded-2xl mt-1 p-2  shadow-sm">
      <Text className="text-lg font-semibold mb-2">Create Group</Text>

      <View className="flex-col gap-4">
        {/* Airport Dropdown */}
        <View className="border border-gray-300 rounded-xl justify-center ">
          <Picker
            selectedValue={selectedAirport}
            onValueChange={(itemValue) => setSelectedAirport(itemValue)}
          >
            <Picker.Item label="Osmani International Airport" value="osmani" />
            <Picker.Item
              label="Hazrat Shahjalal International Airport"
              value="shahjalal"
            />
            <Picker.Item label="Cox’s Bazar Airport" value="cox" />
          </Picker>
        </View>
        <View style={{ height: 40 }} className="flex-row justify-between gap-4">
          <TextInput
            className=" border w-[200px] border-gray-300 rounded-xl px-3 py-2 text-gray-700"
            placeholder="Group Name"
            value={groupName}
            onChangeText={setGroupName}
          />

          <TouchableOpacity
            className={`px-4 py-2 rounded-xl flex items-center justify-center ${
              groupName ? "bg-blue-600" : "bg-gray-300"
            }`}
            disabled={!groupName}
            onPress={handleCreateGroup}
          >
            <Text
              className={`font-semibold ${
                groupName ? "text-white" : "text-gray-500"
              }`}
            >
              Create Group
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
