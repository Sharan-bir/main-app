import { Text, Pressable , StyleSheet,View} from "react-native";

const SigninButton = ({label,onPress}) => {

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default SigninButton;

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        marginBottom:0,
    },
    button: {   
        width: 120,
        backgroundColor:'#fef100',
        borderRadius: 6,
        alignContent:'center',
        justifyContent:'center',
        borderColor: '#c5ba00', 
        borderWidth: 1,  
    },
    text:{
        fontSize:16,
        padding:8,
        textAlign:'center',
        fontFamily:'MontserratLight',
    },
})