import { Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import DefaultContent from "../../components/DefaultContent"
import { useCallback, useState } from "react"
import DefaultInput from "../../components/DefaultInput"
import { moderateScale, scale } from "react-native-size-matters"
import PickDate from "../../components/PickDate"
import DefaultButton from "../../components/DefaultButton"
import { studentAtom } from "../../state"
import { useAtom } from "jotai"
import { useNavigation } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { StudentParamList } from "../../router/StudentRouter"


const AddStudentScreen = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [students, setStudents] = useAtom(studentAtom)

  const handleSetName = useCallback((val: string) => {
    setName(val)
  }, [])

  const handleSetDate = useCallback((val: Date) => {
    setDate(val)
  }, [])

  const handleSetOpen = useCallback((val: boolean) => {
    setOpen(val)
  }, [])

  const handleSave = () => {
    setStudents([
      { name: name, birthDay: date },
      ...students
    ])
    navigation.navigate('StudentScreen')
  }

  const navigation = useNavigation<StackNavigationProp<StudentParamList>>()


  return (
    <View onStartShouldSetResponder={() => {
      Keyboard.dismiss()
      return true
    }} style={{ flex: 1 }} >
      <DefaultContent>
        <ScrollView>
          <Text style={style.title}>Student Name</Text>
          <DefaultInput value={name} onChange={handleSetName} />
          <Text style={style.title}>Date of birth</Text>
          <PickDate open={open} onOpen={() => handleSetOpen(true)}
            onClose={() => handleSetOpen(false)}
            onConfirm={(val) => handleSetDate(val)}
            date={date} />
          {name !== '' && (
            <View style={{
              alignItems: "center",
              marginVertical: moderateScale(100)
            }}>
              <DefaultButton onPress={handleSave}
                width={scale(200)}
                bg={'rgba(0, 0, 255, 1)'}
                label={'save'}
                bgPressed={'rgba(0, 0, 255, 0.7)'}
                textColor={'white'}
                fontSize={scale(16)} />
            </View>
          )}
        </ScrollView>
      </DefaultContent>
    </View >
  )
}

export default AddStudentScreen

const style = StyleSheet.create({
  title: {
    fontSize: moderateScale(16),
    color: "black"
  }
})