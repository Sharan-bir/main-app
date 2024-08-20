import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();


export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const MaterialTopTabsLayout = () => {
  return (
    <>
      <View className="h-20 ">
        <View className="m-2 p-2 bg-blue-300 h-16">
          <Text>Hellos</Text>
        </View>
      </View>
      <MaterialTopTabs
     
      >
        <MaterialTopTabs.Screen options={{title:"hello"}} name="event-items"  />
        <MaterialTopTabs.Screen name="event-details"  />
      </MaterialTopTabs>
  
    </>
  );
};

export default MaterialTopTabsLayout;
