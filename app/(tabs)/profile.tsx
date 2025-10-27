import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type MenuItemProps = {
  icon: string;
  label: string;
  badge?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badge }) => {
  return (
    <TouchableOpacity className="flex-row items-center">
      <Icon name={icon} size={22} color="#6b7280" />
      <Text className="ml-4 text-gray-700 text-base flex-1">{label}</Text>
      {badge && (
        <View className="bg-red-100 rounded-full px-2 py-0.5">
          <Text className="text-red-500 text-sm font-semibold">{badge}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const ProfileSidebar: React.FC = () => {
  const avatarUrls: string[] = [
    "https://i.pravatar.cc/100?img=4",
    // "https://i.pravatar.cc/100?img=5",
    "https://i.pravatar.cc/100?img=6",
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Profile Header */}
        <View className="items-center mt-8">
          <Image
            source={{ uri: "https://i.pravatar.cc/100?img=3" }}
            className="w-20 h-20 rounded-full"
          />
          <Text className="text-lg font-semibold mt-3">hossain</Text>
          <Text className="text-gray-500 text-sm">sabbir@hossain.com</Text>
        </View>

        {/* Secondary Avatars */}
        <View className="flex-row justify-center mt-4 space-x-3">
          {avatarUrls.map((uri, idx) => (
            <Image key={idx} source={{ uri }} className="w-10 h-10 rounded-full" />
          ))}
          <TouchableOpacity className="w-10 h-10 rounded-full border border-gray-300 items-center justify-center">
            <Icon name="add" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View className="border-b border-gray-200 my-6 mx-6" />

        {/* Menu List */}
        <View className="px-8 space-y-5">
          <MenuItem icon="home-outline" label="Home" />
          <MenuItem icon="person-outline" label="Profile" />
          <MenuItem icon="folder-outline" label="Projects" badge="3" />
          <MenuItem icon="card-outline" label="Subscription" />
          <MenuItem icon="shield-outline" label="Security" />
          <MenuItem icon="settings-outline" label="Account settings" />
        </View>
      </ScrollView>

      {/* Sign Out Button */}
      <TouchableOpacity className="bg-red-100 py-4 mt-auto">
        <Text className="text-center text-red-500 font-semibold text-base">
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSidebar;
