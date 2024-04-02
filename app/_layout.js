import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="screens/SignInScreen"
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="screens/SignUpScreen"
        options={{
          headerTitle: "Sign up",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
