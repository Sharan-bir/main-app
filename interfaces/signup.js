import { View, Text , ScrollView,StyleSheet, Image, Alert} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React,{useState} from 'react';

const signup = () => {
  return (
    <SafeAreaView>
        <ScrollView style={Styles.mainContainer}>
            <View>
                <Text>signup</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default signup;

const Styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#f2f2f2',
  }
})
