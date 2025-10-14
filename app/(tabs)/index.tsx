import { images } from "@/constants/images";

import MenuCard from "@/components/MenuCard";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import "../global.css";
// const images = {
//       image1: require('@assets/images/dashboard.png'),
//       image2: require('../assets/image2.jpg'),
//     };
const heroItems = [
  {
    id: 1,
    title: "Airport Dashboard",
    image1: require('../../assets/images/dashboard.png'),
    url: "/dashboard",
  },
  {
    id: 2,
    title: "Full Checklist",
    image1: require('../../assets/images/checklist.png'),
    url: "/dashboard/fullChecklist",
  },
  {
    id: 3,
    title: "Partial Checklist",
    image1: require('../../assets/images/checklist2.png'),
    url: "/dashboard/partial-checklist",
  },
  {
    id: 4,
    title: "Summary Report",
    image1: require('../../assets/images/reports.png'),
    url: "/dashboard/report-summary",
  },
  {
    id: 5,
    title: "CAPs",
    image1: require('../../assets/images/caps.png'),
    url: "/dashboard/caps",
  },
  {
    id: 6,
    title: "Findings Tracker",
    image1: require('../../assets/images/findings.png'),
    url: "/dashboard/tracker",
  },
  {
    id: 7,
    title: "Overdues Findings",
    image1: require('../../assets/images/overdues.png'),
    url: "/dashboard/overview",
  },
  {
    id: 8,
    title: "Exemptions",
    image1: require('../../assets/images/exemptions.png'),
    url: "/dashboard/exemptions",
  },
  {
    id: 9,
    title: "ASD Library",
    image1: require('../../assets/images/library.png'),
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
