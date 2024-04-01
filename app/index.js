import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import SignInScreen from "../screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "../screens/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// const Stack = createNativeStackNavigator();

export default function index() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={SignInScreen} name='SignInScreen' options={{headerShown: false}}/>
    //     <Stack.Screen component={SignUpScreen} name='SignUpScreen' options={{headerShown: false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

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
        <SignInScreen/>
    </SafeAreaView>
  );
}
