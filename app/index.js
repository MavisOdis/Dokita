import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import SignInScreen from "../screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";


// const Stack = createNativeStackNavigator();

export default function index() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={MainScreen} name='Main' options={{headerShown: false}}/>
    //     <Stack.Screen component={HomeScreen} name='Home' options={{headerShown: false}}/>
    //   </Stack.Navigator>
    //   </NavigationContainer>

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
