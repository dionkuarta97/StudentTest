import { PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { moderateScale, } from "react-native-size-matters";


type Props = PropsWithChildren

const DefaultContent = ({ children }: Props) => {
  return (
    <SafeAreaView style={style.container}>
      {children}
    </SafeAreaView>
  )
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    backgroundColor: "white"
  }
})


export default DefaultContent