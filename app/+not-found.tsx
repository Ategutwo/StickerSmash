import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";


export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title:"Oops Not found!"}}/>
    <View style={styles.container}>
        <Link style={styles.button} href="/" >Go back to home screen</Link>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#25292e",
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    color:"#fff"
  },
  button:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"#fff"
  }
})