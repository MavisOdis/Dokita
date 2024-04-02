import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";
import { windowWith, windowHeight } from "../utils/diamentions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const SignInScreen = () => {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "#fff",
      marginTop: '25%'
    }}>
      <Text style={styles.welcome}>Welcome Back!</Text>
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

      <View style={styles.rememberView}>
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
      style={styles.logInBtn}>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20
      }}>
        <Text style={{marginHorizontal:10, color:'#DFDFDF'}}>-----------------</Text>
        <Text style={{color:'#000000', fontSize:14}}>
          or Login with
        </Text>
        <Text style={{marginHorizontal:10, color:'#DFDFDF'}}>-----------------</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:30}}>
        {/* facebook login */}
        <TouchableOpacity style={{
          flexDirection:'row',
          width:180,
          borderColor:'gray', 
          borderWidth:1, 
          alignItems:'center',
          justifyContent:'center',
          paddingVertical:14,
          borderRadius:100,
          }}>
          <Image source={require('../../assests/icons/facebook.png')}/>
          <Text style={{paddingHorizontal:10}}>Facebook</Text>
        </TouchableOpacity>

        {/* Google login */}
        <TouchableOpacity style={{
          flexDirection:'row',
          width:180,
          borderColor:'gray', 
          borderWidth:1, 
          alignItems:'center',
          justifyContent:'center',
          paddingVertical:14,
          borderRadius:100,
          }}>
          <Image source={require('../../assests/icons/Google.png')}/>
          <Text style={{paddingHorizontal:10}}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:100}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
        // onPress={() => router.navigate('/screens/SignUpScreen')}
        onPress={() => router.push('/screens/SignUpScreen')}
        >
          <Text style={{color:'#14C5CE',marginHorizontal:5}}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal:14,
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
    marginTop: 40,
    width: windowWith - 25,
  },
});

export default SignInScreen;
