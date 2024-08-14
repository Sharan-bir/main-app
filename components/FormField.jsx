import { View, Text, TextInput, Pressable,TouchableOpacity, StyleSheet,Image } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';

const eye = require('../assets/images/Eye.png'); 
const invisible = require('../assets/images/Invisible.png');

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => { const [showPassword, setShowPassword] = useState(true);
    return (
        <View style={styles.container}>
        <TextInput style={styles.cell}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && showPassword}
          {...props} />
          {title === "Password" && (
            <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)} >
            <Icon
              name={showPassword ? "visibility" : "visibility-off"} 
              size={24}
              color="#7B7B8B"
            /> 
          </TouchableOpacity>
          )}
        </View>
    );
};

export default FormField;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        fontFamily:'MontserratLight',
    },
    cell: {
        marginTop: 4,
        marginBottom: 4,
        borderWidth: 1,         
        borderColor: '#000', 
        borderRadius: 4,        
        padding: 6,
        paddingLeft:14,            
        backgroundColor: '#FFF', 
        fontSize: 14,          
        color: '#333',         
        width: '80%',
    },
    eyeIcon: {
        position: 'absolute',
        right: 50,              // Position the icon on the right inside the input field
        top: '50%',
        transform: [{ translateY: -20 }], 
  }
})