import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import FormField from "@/components/FormField";
import SigninButton from "@/components/SigninButton";
import LinkButton from "@/components/LinkButton";
import { images } from "@/constants";
import { useGetToken } from "@/api/Loginapi";
import { useRouter } from "expo-router";

const Signin = () => {
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  const router = useRouter();

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

            if (token) {
              router.replace("/(root)/(screen)/(menu)/eventitem");
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
    } catch (error) {
      console.log("Error!!");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={images.background}
          style={Styles.BackgroundImg}
        >
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
                title="Password"
                value={form.password}
                placeholder="Password"
                handleChangeText={(e: any) => setForm({ ...form, password: e })}
              />

              {/* <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={Styles.textright}>Forgot Password?</Text>
              </TouchableOpacity> */}

              <SigninButton label="Sign In" onPress={submit} />

              <Text style={Styles.textcenter}>New to EventExperts?</Text>

              <LinkButton
                label="Create your EventExperts account"
                onPress={{}}
                linkPage="/(auth)/sign-up/"
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
  BackgroundImg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagecontainer: {
    paddingTop: 100,
    position: "absolute",
    zIndex: 10,
  },
  image: {
    width: 200,
    height: 140,
    borderRadius: 4,
  },
  formcontainer: {
    marginTop: 170,
    paddingTop: 90,
    width: "90%",
    height: 480,
    backgroundColor: "white",
    zIndex: 5,
    borderRadius: 10,
    marginBottom: 200,
  },
  // textright: {
  //   textAlign: "right",
  //   right: 40,
  //   color: "#007AFF",
  // },
  textcenter: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
});
