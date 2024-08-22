import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap,
  } from "@react-navigation/material-top-tabs";
  import { Text, View , StyleSheet} from "react-native";
  import { withLayoutContext } from "expo-router";
  import { ParamListBase, TabNavigationState } from "@react-navigation/native";
  import React from "react";
  
  const { Navigator } = createMaterialTopTabNavigator();
  
  
  export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap>(Navigator);
  
  const MaterialTopTabsLayout = () => {
    return (
      <>
      <View style={{backgroundColor:"white",borderTopWidth:1,borderTopColor:"grey"}}>
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text>Hellos</Text>
          </View>
        </View>
        </View>
        <MaterialTopTabs>
          <MaterialTopTabs.Screen name="eventitem"  />
          <MaterialTopTabs.Screen name="eventdetail"  />
        </MaterialTopTabs>
      </>
    );
  };
  
  export default MaterialTopTabsLayout;

  const styles = StyleSheet.create(
    {
        container:{
          flex:0,
          margin:15,
          justifyContent:'center',
          alignItems:'center',
        },
        container2:{
            width:"95%",
            padding:8,
            backgroundColor:"#C7F9FF",
            borderWidth:1,
            borderRadius:8,
            borderColor:"#0195B5",
            height:100,
        }
    }
  )