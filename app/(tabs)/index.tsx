import { images } from "@/constants/images";

import MenuCard from "@/components/MenuCard";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import "../global.css";
const heroItems = [
  {
    id: 1,
    title: "Airport Dashboard",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard",
  },
  {
    id: 2,
    title: "Full Checklist",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/fullChecklist",
  },
  {
    id: 3,
    title: "Partial Checklist",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/partial-checklist",
  },
  {
    id: 4,
    title: "Summary Report",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/report-summary",
  },
  {
    id: 5,
    title: "CAPs",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/caps",
  },
  {
    id: 6,
    title: "Findings Tracker",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/tracker",
  },
  {
    id: 7,
    title: "Overview Findings",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/overview",
  },
  {
    id: 8,
    title: "Exemptions",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/exemptions",
  },
  {
    id: 9,
    title: "ASD Library",
    icon: "@/assets/images/dashboard.png",
    url: "/dashboard/library",
  },
];
export default function index() {
  // const router = useRouter();
  return (
    <View className="flex-1  bg-primar">
      {/* <Image source={images.bg} className="absolute w-full  z-0" /> */}

      <ScrollView
        className="flex-1 px-5 mx-auto "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {" "}
        <Image
          source={images.projectLogo}
          className="w-20 h-20 mt-10 mb- mx-auto "
        />{" "}
        <View className="flex-1 mt-10">
          <Text className="font-bold">CAAB SURVEY</Text>
        </View>
        <FlatList
          data={heroItems}
          renderItem={({ item }) => <MenuCard {...item}></MenuCard>}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            // alignItems: "center",
            gap: 10,
            // paddingRight: ,
            marginBottom: 10,
            // marginRight: "auto",
            // marginLeft: "auto",
          }}
          scrollEnabled={false}
          className="mt-2 pb-32"
        />
      </ScrollView>
    </View>
  );
}

{
  /* <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search Movie here"
          /> */
}
