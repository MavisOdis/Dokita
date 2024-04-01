import { Stack } from "expo-router";

const Layout = () => {
    return(
        <Stack>
            <Stack.Screen name="SignUpScreen"/>
            <Stack.Screen name="SignInScreen"/>
        </Stack>
    );
}

export default Layout;