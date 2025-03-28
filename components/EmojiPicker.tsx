import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropsWithChildren } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";


type Props =PropsWithChildren<{
    isVisible: boolean,
    onClose: ()=> void
}>
export default function EmojiPicker({isVisible,children,onClose}:Props) {
  return (
        <View>
            <Modal animationType="slide" visible={isVisible} transparent={true}>
                <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={18}/>
                    </Pressable>
                </View>
                {children}
                </View>
            </Modal>
        </View>    
  )
}


const styles = StyleSheet.create( {
    modalContent:{
        height:"25%",
        width:"100%",
        backgroundColor:"#25292e",
        borderTopRightRadius:18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom:0
    },
    titleContainer:{
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    },
    title:{
        color:"#fff",
        fontSize:16
    }
})