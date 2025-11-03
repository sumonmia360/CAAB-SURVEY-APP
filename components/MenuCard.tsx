import { Link } from "expo-router";
import { Text, View } from "react-native";
// import Logo from "../assets/svg/fullcheckListSVG.svg";
import LogAsdLibrarySVG from "@/assets/svg/asdLibrarySVG.svg";
import LogoCapsSVG from "@/assets/svg/capsSVG.svg";
import LogoDashboardSVG from "@/assets/svg/dashboardSVG.svg";
import LogoExemptionsSVG from "@/assets/svg/exemptionsSVG.svg";
import LogoFindingsTrackerSVG from "@/assets/svg/findingsTrackerSVG.svg";
import LogoFullcheckListSVG from "@/assets/svg/fullcheckListSVG.svg";
import LogoOverviewFindingsSVG from "@/assets/svg/overviewFindingsSVG.svg";
import LogoQuestionSVG from "@/assets/svg/questionSVG.svg";

interface cardProps {
  id: number;
  title: string;
  image1: any;
  url: any;
}

const MenuCard = ({ id, title, image1, url }: cardProps) => {
  return (
    <Link href={url} className="w-[45%] mb-2 border rounded-lg h-full py-1  ">
      <View className="flex w-full items-center justify-center ">
        {id === 1 ? <LogoDashboardSVG width={70} height={70} /> : <></>}
        {id === 2 ? <LogoFullcheckListSVG width={70} height={70} /> : <></>}
        {id === 3 ? <LogoQuestionSVG width={70} height={70} /> : <></>}
        {id === 4 ? <LogoCapsSVG width={70} height={70} /> : <></>}
        {id === 5 ? <LogoFindingsTrackerSVG width={70} height={70} /> : <></>}
        {id === 6 ? <LogoOverviewFindingsSVG width={70} height={70} /> : <></>}
        {id === 7 ? <LogoExemptionsSVG width={70} height={70} /> : <></>}
        {id === 8 ? <LogAsdLibrarySVG width={70} height={70} /> : <></>}

        {/* <Logo1 width={70} height={70} /> */}
        {/* <Image source={image1}  className="size-20" ></Image> */}
        <Text className="font-bold">{title}</Text>
      </View>
    </Link>                  
  );
};

export default MenuCard;
