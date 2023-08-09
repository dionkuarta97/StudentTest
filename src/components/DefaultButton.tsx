

import React from "react"
import { Pressable, Text, StyleSheet } from "react-native"
import { moderateScale, scale } from "react-native-size-matters"

type Props = {
  label: string & {}
  bg: string & {}
  bgPressed: string & {}
  textColor: string & {}
  width: number & {}
  fontSize: number & {}
  onPress: () => void,

}


const DefaultButton = ({
  label,
  bg,
  textColor,
  width,
  bgPressed,
  fontSize,
  onPress,

}: Props) => {
  return (
    <Pressable style={({ pressed }) => [
      style.button,
      {
        width: width,

        backgroundColor: pressed ? bgPressed : bg,
        transform: [{ scale: pressed ? 0.99 : 1 }]
      }
    ]} onPress={onPress}>
      <Text style={{
        color: textColor,
        fontSize: fontSize
      }}>{label}</Text>
    </Pressable>
  )
}

export default DefaultButton

const style = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: moderateScale(10),
    borderRadius: scale(8),
  }
})