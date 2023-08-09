
import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
type Props = PropsWithChildren & {
  last: boolean
}

const DefaultCard = ({ children, last }: Props) => {

  return (
    <View style={[style.card, {
      marginBottom: last ? scale(100) : 0
    }]}>{children}</View>
  )
}

export default DefaultCard

const style = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: moderateScale(20),
    marginVertical: moderateScale(10),
    borderRadius: scale(8),
  }
})