import react from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { windowWith } from "../utils/diamentions";
import { Feather } from "@expo/vector-icons";

const SigUpScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 50,
        }}
      >
        Welcome Back!
      </Text>
      {/* email input */}
      <View>
        <Text>Email address</Text>
        <TextInput
          placeholder="John@example.com"
          style={{
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 1,
            padding: 8,
            marginTop: 5,
            width: windowWith - 25,
          }}
        />
      </View>

      {/* Password input */}
      <View
        style={{
          marginTop: 30,
        }}
      >
        <Text>Password</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:'center'
          }}
        >
          <TextInput
            placeholder="************"
            style={{
              borderRadius: 20,
              borderColor: "black",
              borderWidth: 1,
              padding: 8,
              marginTop: 5,
              width: windowWith - 25,
            }}
          />
          <TouchableOpacity>
            <Feather
              name="eye"
              size={20}
              color="#C6C6C6"
              style={{ paddingRight: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "gray",
            fontSize: 14,
          }}
        >
          Remember me
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 14,
          }}
        >
          Forget Password
        </Text>
      </View>

      {/* Login btn */}
      <TouchableOpacity
        style={{
          backgroundColor: "#14C5CE",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          paddingVertical: 18,
          marginTop: 20,
          width:windowWith-25
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigUpScreen;
