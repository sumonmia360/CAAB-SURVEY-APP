import { TextInput } from "react-native";

export const InputField = ({ value, onChangeText, placeholder, style, multiline }: any) => {
  return (
    <TextInput
      value={value}

      onChangeText={onChangeText}
      placeholder={placeholder}
      style={style}
      multiline={multiline}
    />
  );
};