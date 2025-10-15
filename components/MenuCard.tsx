import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

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
        <Image source={image1}  className="size-20" ></Image>
        <Text className="font-bold">{title}</Text>
      </View>
    </Link>
  );
};

export default MenuCard;


