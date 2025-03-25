import { transform } from "@babel/core"
import { Image,type ImageSource } from "expo-image"
import {View} from "react-native"
import {Gesture, GestureDetector} from "react-native-gesture-handler"
import Animate,{useAnimatedStyle,useSharedValue,withSpring } from "react-native-reanimated"
type Props = {
    imageSize: number,
    stickerSource: ImageSource,
}

export default function EmojiSticker({imageSize,stickerSource}:Props) {
    let scaleSize= useSharedValue(imageSize);
    let translateX = useSharedValue(0)
    let translateY = useSharedValue(0)
    const imageStyle = useAnimatedStyle(()=>{
        return {
            width: withSpring(scaleSize.value),
            height: withSpring(scaleSize.value)
        }
    })
    let doubleTap = Gesture.Tap().numberOfTaps(2)
    .onStart(()=>{
        if(scaleSize.value !== imageSize*2){
            scaleSize.value = imageSize *2;
        }
        else{
            scaleSize.value = Math.round(scaleSize.value/2)
        }
    })
    const drag = Gesture.Pan().onChange(event=>{
        translateX.value += event.changeX
        translateY.value += event.changeY
    })
    const containerStyle = useAnimatedStyle(()=>{
        return {
            transform:[
                {translateX: translateX.value},
                {translateY:translateY.value}
            ]
        }
    })
  return (
    <GestureDetector gesture={drag}>
    <Animate.View  style={[containerStyle,{top:-350}]}>
        <GestureDetector gesture={doubleTap}>
    <Animate.Image resizeMode="contain" source={stickerSource} style={[imageStyle,{width:imageSize,height:imageSize}]}/>
    </GestureDetector>
    </Animate.View>
    </GestureDetector>
  )
}
