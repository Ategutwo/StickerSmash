import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import {Image} from "expo-image"
import { Text, View,StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker"
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CirceButton from "@/components/CirceButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import { type ImageSource } from "expo-image";
import EmojiSticker from "@/components/EmojiSticker";
const PlaceHolderImage = require("@/assets/images/background-image.png")

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<String | undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible,setIsModalVisible] = useState<boolean>(false)
  const [pickedEmoji,setPickedEmoji] = useState<ImageSource| undefined>(undefined)
  const pickImageAsync = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:["images"],
      allowsEditing: true,
      quality:1
    })
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    }
    else{
      console.log("Operation cancelled")
    }
  }
  const onReset=()=>{
    setShowAppOptions(false);
  }

  const onAddSticker = ()=>{
    setIsModalVisible(true)
  }
  const onModalClose = ()=>{
    setIsModalVisible(false)
  }
  const onSaveImageAsync = async ()=>{
    //Save to device
  }
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
      <ImageViewer ImageSource={PlaceHolderImage} SelectedImage={selectedImage}/>
      {pickedEmoji && <EmojiSticker stickerSource={pickedEmoji} imageSize={40}/>}
      </View>
      {showAppOptions?<View  style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          
        <IconButton icon="refresh" label="Reset" onPress={onReset}/>
        <CirceButton onPress={onAddSticker}/>
        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
        </View>
      </View>:<View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={ async ()=>{
          await pickImageAsync();
        }}/>
        <Button label="Use Photo" onPress={()=>setShowAppOptions(true)} />
      </View>}
      
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onCloseModal={onModalClose} onSelect={setPickedEmoji}/>
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#25292e",
    alignItems:"center",
    justifyContent:"center"
  },

  imageContainer:{
    flex:1
  },
 footerContainer:{
  flex:1/3,
  alignItems:"center"
 },
 optionsContainer:{
  position:"absolute",
  bottom:0
 },
 optionsRow:{
  paddingBottom:15,
  alignItems:"center",
  flexDirection:"row"
 }
})