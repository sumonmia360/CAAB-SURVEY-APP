import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../constants/images";


const mockUser = {
  name: "Sumon Mia",
  email: "sumonmia.dev@gmail.com",
  avatar: images?.profile || "https://ui-avatars.com/api/?name=John+Doe",
};

const Profile = () => {
  const [user, setUser] = useState(mockUser);

  const handleEditProfile = () => {

  };

  const handleChangePassword = () => {

  };

  const handleLogout = () => {
 
  };

  return (
    <View className="flex-1 items-center justify-center p-6 bg-white">
      <Image
        source={images.profile }
        className="w-24 h-24 rounded-full mb-4"
      />
      <Text className="text-dark-200 text-2xl font-bold mb-1">{user.name}</Text>
      <Text className="text-gray-500 text-base mb-6">{user.email}</Text>

      <TouchableOpacity
        className="bg-blue-500 px-6 py-2 rounded-full mb-3"
        onPress={handleEditProfile}
      >
        <Text className="text-white text-base">Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-yellow-500 px-6 py-2 rounded-full mb-3"
        onPress={handleChangePassword}
      >
        <Text className="text-white text-base">Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-red-500 px-6 py-2 rounded-full"
        onPress={handleLogout}
      >
        <Text className="text-white text-base">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

