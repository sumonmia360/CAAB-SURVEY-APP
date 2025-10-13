import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import "../global.css";
// const heroItems = [
//   {
//     id: 1,
//     title: "Airport Dashboard",
//     icon: "mdi:airplane",
//     href: "/dashboard",
//   },
//   {
//     id: 2,
//     title: "Full Checklist",
//     icon: "mdi:clipboard-check-outline",
//     href: "/dashboard/full-checklist",
//   },
//   {
//     id: 3,
//     title: "Partial Checklist",
//     icon: "mdi:clipboard-list-outline",
//     href: "/dashboard/partial-checklist",
//   },
//   {
//     id: 4,
//     title: "Summary Report",
//     icon: "mdi:file-chart-outline",
//     href: "/dashboard/report-summary",
//   },
//   {
//     id: 5,
//     title: "CAPs",
//     icon: "mdi:book-edit-outline",
//     href: "/dashboard/caps",
//   },
//   {
//     id: 6,
//     title: "Findings Tracker",
//     icon: "mdi:track-light",
//     href: "/dashboard/tracker",
//   },
//   {
//     id: 7,
//     title: "Overview Findings",
//     icon: "mdi:eye-outline",
//     href: "/dashboard/overview",
//   },
//   {
//     id: 8,
//     title: "Exemptions",
//     icon: "mdi:shield-off-outline",
//     href: "/dashboard/exemptions",
//   },
//   {
//     id: 9,
//     title: "ASD Library",
//     icon: "mdi:library-outline",
//     href: "/dashboard/library",
//   },
// ];
export default function index() {
  const router = useRouter();
  return (
    <View className="flex-1  bg-primary">
      <Image source={images.bg} className="absolute w-full  z-0" />

      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {" "}
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto "
        />{" "}
        <View className="flex-1 mt-10">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search Movie here"
          />
        </View>
      </ScrollView>
    </View>
  );
}
