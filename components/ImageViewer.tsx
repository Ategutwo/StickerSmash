import { View,StyleSheet } from "react-native"
import {Image} from "expo-image"

type Props ={
    ImageSource: String,
    SelectedImage?: String
}

export default function ImageViewer({ImageSource,SelectedImage}:Props) {
  return (
    <Image source={SelectedImage?SelectedImage:ImageSource} style={styles.image}/>
  )
}


const styles = StyleSheet.create({

  image:{
    width:320,
    height: 440,
    borderRadius: 18
  }
})