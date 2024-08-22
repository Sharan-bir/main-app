import { useNavigation } from "expo-router";
import { Image, Text, TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import { images } from "@/constants";
import { DrawerActions } from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import React, { useState } from "react";
import CustomDrawer from "@/components/CustomDrawer";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import CustomDrawerLabel from "@/components/CustomDrawerLabel";

const DrawerLayout = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);

    // Animate the thumb movement
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 28], // Adjust based on your toggle width and padding
  });

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const onBellPress = () => {
    console.log("Pressed Bell!");
  };

  return (
    <>
      <Drawer drawerContent={CustomDrawer}
        screenOptions={{
          drawerStyle: { width: "100%"},
          drawerPosition: 'right',
          drawerActiveBackgroundColor:'#C7F9FF',
          headerShadowVisible: false,
          drawerLabelStyle: {
            fontSize: 18,
            color: '#000',
          },
        }}
      >
        <Drawer.Screen
          name="(menu)"
          options={{
            title:"My Menu", 
            drawerIcon: () => (
              <AntDesign name="arrowleft" size={24} color="black"  />
            ),
            headerLeft: () => (
              <Image style={style.image} source={images.Logo} />
            ),
            headerRight: () => {
              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                  <View style={{ alignItems: 'center', marginRight: 30 }}>
                        <Text style={style.toggleText}>
                            {isEnabled ? 'Hide Price' : 'Show Price'} 
                        </Text>
                        <TouchableOpacity 
                        style={[style.toggleButton]} onPress={toggleSwitch} activeOpacity={0.8} >
                        <Animated.View
                            style={[
                            style.switch,
                            {
                                transform: [{ translateX: thumbPosition }],
                                backgroundColor: isEnabled ? '#fef100' : '#000',
                            },]}/>
                        </TouchableOpacity>
                    </View>

                  <TouchableOpacity onPress={() => { onBellPress();}} style={{ marginRight: 15 }} >
                    <View style={{ position: 'relative' }}>
                        <Image style={style.iconSize} source={images.Bell} />
                        <View style={style.circle} >
                            <Text style={style.notificationNumber}>
                            20 {/* Dynamic Number goes here */}
                            </Text>
                        </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { onToggle();}}  style={{ marginRight: 15 }} > 
                    <Image style={style.iconSize} source={images.hamBurger} />
                  </TouchableOpacity>

                </View>);
                },
            headerTitle: "",
            headerShown: true,
          }}
        />

        <Drawer.Screen name="eventitem" options={{ headerShown: true,
        drawerLabel: () => <CustomDrawerLabel title="Event Items" subTitle="Manage your Items" />,drawerIcon: () => (
             <Ionicons name="cart-outline" size={24} color="black" />
            ),}} />

        <Drawer.Screen name="eventdetail" options={{ headerShown: true ,
        drawerLabel: () => <CustomDrawerLabel title="Event Details" subTitle="Manage your Items" />,
        drawerIcon: () => ( <Feather name="sunset" size={24} color="black" />  ),}}/>

      </Drawer>
    </>
  );
};

export default DrawerLayout;

const style = StyleSheet.create({
  image: {
    marginLeft: 10,
    width: 160,
    height: 40,
  },
  toggleButton:{
    width: 46,        
    height: 20,       
    borderRadius: 20, 
    borderWidth: 1,   
    borderColor: 'black',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    padding: 2,   
  },
  switch: {
    width: 14,        
    height: 14,       
    borderRadius: 10, 
    position: 'absolute', 
    top: 2,   
  },
  toggleText:{
    fontSize: 10,
    fontFamily:'MontserratLight',
    marginTop:-8,
    fontWeight: 'heavy' ,
    marginBottom:4,
  },
  circle:{
    position: 'absolute',
    left: -16,
    top: -12,
    backgroundColor: '#fef100', 
    borderColor: '#c5ba00', 
    borderWidth: 0.5,  
    borderRadius: 10, 
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationNumber:{ 
    color: 'black', 
    fontSize: 8, 
    fontWeight: "bold",
  },
  iconSize:{
    width:25,
    height:25
},
});
