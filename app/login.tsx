import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { Video } from "expo-av";
import { DarkTheme } from "@react-navigation/native";
import { MonoText } from "../components/StyledText";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const { text } = DarkTheme.colors;

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please enter your email and password");
      }
      // Replace 'your-api-endpoint' with the actual API endpoint for login
      else {
        const response = await axios.post("your-api-endpoint", {
          email,
          password,
        });

        // Handle the response as needed
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors
      console.error("Login failed", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Video
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }} // Replace with your actual video URI
        style={{
          flex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />

      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            width: "80%",
            backgroundColor: "rgba(10, 10, 10, 0.8)",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <View>
            {/* Logo and slogan  */}
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/LOGO.png")}
                style={{ width: 242, height: 47 }}
              />
              <MonoText style={{ marginTop: 20, color: `${text}` }}>
                Talk to anyone , anytime!
              </MonoText>

              <MonoText
                style={{
                  fontSize: 40,
                  marginBottom: 20,
                  fontWeight: "bold",
                  color: text,
                }}
              >
                Login
              </MonoText>
            </View>

            {/* Email Input */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <FontAwesome
                name="envelope"
                size={24}
                color={text}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={text}
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  paddingBottom: 5,
                  color: text,
                }}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            {/* Password Input */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <FontAwesome
                name="lock"
                size={24}
                color={text}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={text}
                secureTextEntry
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  paddingBottom: 5,
                  color: text,
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={{
                backgroundColor: "#3498db",
                padding: 10,
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={handleLogin}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
