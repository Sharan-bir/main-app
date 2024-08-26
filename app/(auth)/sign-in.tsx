import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import FormField from "@/components/FormField";
import SigninButton from "@/components/SigninButton";
import LinkButton from "@/components/LinkButton";
import { images } from "@/constants";
import { useGetToken } from "@/api/Loginapi";

const Signin = () => {
  const [form, setForm] = React.useState({
    password: "",
    email: "",
    phoneNumber: "",
  });

  const handleForgotPassword = () => {
    Alert.alert(
      "Forgot Password",
      "Please check your email for password reset link"
    );
  };
  const { mutate: getToken } = useGetToken();

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
    }

    try {
      console.log(form.email, form.password);
      getToken(
        {
          username: form.email,
          password: form.password,
        },
        {
          onSuccess: (data: any) => {
            console.log("Token:", data.jwtToken);

            const token = data.jwtToken;

            if (token != undefined) {
              Alert.alert("Success", "You LoggedIn !!");
            }
            setForm({ ...form, email: "", password: "" });
          },
          onError: (error: any) => {
            console.error("Error during authentication:", error);
            Alert.alert(
              "Authentication Error",
              error.message || "An error occurred"
            );
          },
        }
      );
      // api logic goes here
    } catch (error) {
      console.log("Error!!");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={images.background}>
          <View style={Styles.container}>
            <View style={Styles.imagecontainer}>
              <Image source={images.mainLogo} style={Styles.image} />
            </View>

            <View style={Styles.formcontainer}>
              <FormField
                title="Email"
                value={form.email}
                placeholder="Email"
                handleChangeText={(e: any) => setForm({ ...form, email: e })}
              />

              <FormField
                title="phoneNumber"
                value={form.phoneNumber}
                placeholder="Phone Number"
                handleChangeText={(e: any) =>
                  setForm({ ...form, phoneNumber: e })
                }
              />

              <FormField
                title="Password"
                value={form.password}
                placeholder="Password"
                handleChangeText={(e: any) => setForm({ ...form, password: e })}
              />

              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={Styles.textright}>Forgot Password?</Text>
              </TouchableOpacity>

              <SigninButton label="Sign In" onPress={submit} />

              <Text style={Styles.textcenter}>New to EventExperts?</Text>

              <LinkButton
                label="Create your EventExperts account"
                onPress={{}}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imagecontainer: {
    paddingTop: 40,
    position: "absolute",
    zIndex: 10,
  },
  image: {
    width: 200,
    height: 140,
    borderRadius: 4,
  },
  formcontainer: {
    marginTop: 110,
    paddingTop: 90,
    width: "90%",
    height: 550,
    backgroundColor: "white",
    zIndex: 5,
    borderRadius: 10,
    marginBottom: 50,
  },
  textright: {
    textAlign: "right",
    right: 40,
    color: "#007AFF",
  },
  textcenter: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
});
