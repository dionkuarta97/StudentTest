import { Pressable, StyleSheet, Text } from "react-native"
import { scale } from "react-native-size-matters"



type Props = {
  onPress: () => void
}


const AddButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      style.button,
      {
        backgroundColor: pressed ? 'rgba(0, 0, 255, 0.7)' : 'rgba(0, 0, 255, 1)',
        transform: [{ scale: pressed ? 0.99 : 1 }]
      }
    ]}>
      <Text style={style.text}>+</Text>
    </Pressable>
  )
}



export default AddButton

const style = StyleSheet.create({
  button: {
    width: scale(50),
    height: scale(50),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: scale(15),
    right: scale(15),
    borderRadius: 300
  },
  text: {
    fontSize: scale(30),
    fontWeight: 'bold',
    color: "white"
  }
})