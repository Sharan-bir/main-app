import { Stack, useNavigation } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { images } from "~/constants";
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const TabLayout = () => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <>
      <Drawer screenOptions={{ headerShadowVisible: false }}>
        {/* <Drawer.Screen name="(menu)"/> */}
        <Drawer.Screen
          name="(menu)"
          options={{
            headerLeft: () => (
              <Image
                className="w-10 h-10 border-2 rounded-full ml-10 "
                source={images.logo}
              />
            ),
            headerRight: () => {
              return (
                <TouchableOpacity
                  className="absolute top-0 right-0 p-4"
                  onPress={() => {
                    onToggle();
                  }}
                >
                  <MaterialIcons name="menu" size={30} color="black" />
                </TouchableOpacity>
              );
            },
            headerTitle: () => {
              return (
                <View className="ml-10">
                  <Text className="text-2xl font-bold">Home</Text>
                </View>
              );
            },
            headerShown: true,
          }}
        />
        <Drawer.Screen name="event-items" options={{ headerShown: false }} />
        <Drawer.Screen name="event-details" options={{ headerShown: false }} />
      </Drawer>
    </>
  );
};

export default TabLayout;
