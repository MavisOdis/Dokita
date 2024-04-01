import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { windowWith } from "../utils/diamentions";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

const SignUpScreen = () => {
    
  const router = useRouter();
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView>
      <Stack.Screen>
        <Text style={styles.welcome}>Create an Account</Text>
        {/* email input */}
        <View>
          <Text>Email address</Text>
          <TextInput placeholder="John@example.com" style={styles.emailInput} />
        </View>

        {/* Password input */}
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text>Password</Text>
          <View style={styles.passwordView}>
            <TextInput
              // Set secureTextEntry prop to hide
              //password when showPassword is false
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter Password"
              placeholderTextColor="#aaa"
              style={styles.passwordInput}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={toggleShowPassword}
              style={{ marginRight: 20 }}
            />
          </View>
        </View>

        {/* SignUp btn */}
        <TouchableOpacity style={styles.logInBtn}>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </Stack.Screen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 50,
  },
  emailInput: {
    borderRadius: 20,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    paddingVertical: 10,
    paddingRight: 10,
    marginTop: 5,
    width: windowWith - 25,
    backgroundColor: "#F2F2F2",
  },
  passwordView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingHorizontal: 14,
  },
  passwordInput: {
    flex: 1,
    color: "#333",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  rememberView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  logInBtn: {
    backgroundColor: "#14C5CE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: 18,
    marginTop: 20,
    width: windowWith - 25,
  },
});

export default SignUpScreen;
