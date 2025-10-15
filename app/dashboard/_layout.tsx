import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="fullChecklist" options={{ headerShown: false }} />
      {/* <Stack.Screen name="_layout" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default _layout;


