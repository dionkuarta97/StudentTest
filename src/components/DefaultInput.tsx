import { StyleSheet, TextInput } from "react-native"
import { moderateScale, verticalScale } from "react-native-size-matters"



type Props = {
  onChange: (val: string) => void,
  value: string
}


const DefaultInput = ({ onChange, value }: Props) => {
  return (
    <TextInput value={value} onChangeText={onChange} style={style.input} />
  )
}


export default DefaultInput

const style = StyleSheet.create({
  input: {
    width: '100%',
    height: verticalScale(35),
    borderWidth: 1,
    marginVertical: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(8),
    backgroundColor: "rgb(240, 240, 240)"
  }
})