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
  import FormField from "../../components/FormField";
  import SignupButton from "../../components/SignupButton";
  
  const mainLogo = require("../../assets/images/mainLogo.png");
  
  const Signup = () => {
   
    const [form, setForm] = React.useState({
      username: "",
      password: "",
      email: "",
      companyName: "",
      confirmPassword: "",
      phoneNumber: "",
    });
  
    const submit = async () => {
      if (!form.username || !form.password || !form.phoneNumber) {
        Alert.alert("Error", "Please fill in all fields");
      }
  
      try {
        console.log(
          form.username,
          form.email,
          form.phoneNumber,
          form.companyName
        );
        // api logic goes here
      } catch (error) {
        console.log("Error!!");
      }
    };
  
    return (
      <SafeAreaView>
        <ScrollView>
          <ImageBackground source={require("../../assets/images/background.png")}>
  
            <View style={Styles.container}>
              <View style={Styles.imagecontainer}>
                <Image source={mainLogo} style={Styles.image} />
              </View>
  
              <View style={Styles.formcontainer}>
                <FormField
                  title="Username"
                  value={form.username}
                  placeholder="Username"
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                />
  
                <FormField
                  title="Email"
                  value={form.email}
                  placeholder="Email"
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                />
  
                <FormField
                  title="phoneNumber"
                  value={form.phoneNumber}
                  placeholder="Phone Number"
                  handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
                />
  
                <FormField
                  title="companyName"
                  value={form.companyName}
                  placeholder="Company Name"
                  handleChangeText={(e) => setForm({ ...form, companyName: e })}
                />
  
                <FormField
                  title="Password"
                  value={form.password}
                  placeholder="Password"
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                />
  
                <FormField
                  title="Password"
                  value={form.confirmPassword}
                  placeholder="Confirm Password"
                  handleChangeText={(e) =>
                    setForm({ ...form, confirmPassword: e })
                  }
                />
  
                <SignupButton
                  label="Sign Up"
                  onPress={submit}
                />
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Signup;
  
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
    }
  });
  