import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { Video } from "expo-av";
import { DarkTheme } from "@react-navigation/native";
import { Link } from "expo-router";
import { MonoText } from "../../components/StyledText";
import { serverInstance } from "../../utils/axiosInstance";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { text } = DarkTheme.colors;

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      if (!email || !password) {
        alert("Please enter your email and password");
      }
      // Replace 'your-api-endpoint' with the actual API endpoint for login
      else {
        const response = await serverInstance.post("/api/auth/login", {
          email,
          password,
        });

        // Handle the response as needed
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
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
                source={require("../../assets/images/LOGO.png")}
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
                Register
              </MonoText>
            </View>
            {/* Name Input  */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <FontAwesome
                name="user"
                size={24}
                color={text}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Name"
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
              {isLoading ? (
                <ActivityIndicator size={"small"} color={"#fff"} />
              ) : (
                <Text style={{ color: "#fff", fontSize: 16 }}>Register</Text>
              )}
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: text, textAlign: "center" }}>
                Already have an account?{" "}
                <Link
                  href={"/auth/login"}
                  style={{ fontWeight: "bold", lineHeight: 23 }}
                >
                  Login here.
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;
