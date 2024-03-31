import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import SigUpScreen from "../screens/SignUpScreen";

export default function index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:'#fff',
        padding:10
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      <View>
        <Text
          style={{
            textTransform: "uppercase",
          }}
        >
          <SigUpScreen/>
        </Text>
      </View>
    </SafeAreaView>
  );
}
