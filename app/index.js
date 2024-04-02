import React from "react";
import { SafeAreaView, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";


export default function index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
      }}
    >
      <SignInScreen />
    </SafeAreaView>
  );
}
