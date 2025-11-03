import MenuCard from "@/components/MenuCard";
import { images } from "@/constants/images";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { heroItems } from "../../jsons/HeroData";
import "../global.css";

export default function index() {
  return (
    <View className="flex-1  bg-primar">
      <ScrollView
        className="flex-1 px-5 mx-auto "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={images.projectLogo}
          style={styles.pLogoStyle}
          className="w-20 h-20 mt-10  mx-auto "
        />
        <View className="flex-1 mt-5">
          <Text className="font-bold text-2xl text-center ">CAAB SURVEY</Text>
        </View>
        <FlatList
          data={heroItems}
          renderItem={({ item }) => <MenuCard {...item}></MenuCard>}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 10,
          }}
          scrollEnabled={false}
          className="mt-2 pb-32"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pLogoStyle: {
    height:100,
    width:110
  }
});


