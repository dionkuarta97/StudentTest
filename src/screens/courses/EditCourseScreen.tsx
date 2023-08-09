import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native"
import DefaultContent from "../../components/DefaultContent"
import DefaultInput from "../../components/DefaultInput"
import { moderateScale, scale } from "react-native-size-matters"
import BottomSheet from "../../components/BottomSheet"
import { useCallback, useState } from "react"
import DefaultButton from "../../components/DefaultButton"
import { useAtom } from "jotai"
import { courseAtom, studentAtom } from "../../state"
import { useNavigation, useRoute } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { CourseParamList, CourseRouteProps } from "../../router/CourseRouter"



const EditCourseScreen = () => {
  const route = useRoute<CourseRouteProps<'EditCourseScreen'>>()
  const [show, setShow] = useState(false)
  const [students] = useAtom(studentAtom)
  const [courses, setCourses] = useAtom(courseAtom)
  const [name, setName] = useState(route.params.name)
  const [listStudent, setListStudent] = useState<{ name: string, birthDay: Date }[]>(route.params.student)
  const handleSetShow = useCallback((val: boolean) => {
    setShow(val)
  }, [])

  const navigation = useNavigation<StackNavigationProp<CourseParamList>>()

  return (
    <DefaultContent>
      <ScrollView>
        <Text style={style.title}>Course Name</Text>
        <DefaultInput value={name} onChange={(val) => { setName(val) }} />
        <Text style={[style.title, { marginBottom: scale(10) }]}>List Student</Text>
        <View style={{ width: "100%", borderBottomWidth: 2, marginBottom: scale(10) }} />
        {listStudent.map((el, idx) => (
          <View key={idx + 'jkl'} style={{ paddingVertical: 4, flexDirection: 'row', alignItems: "center" }} >
            <Text style={{ color: "black", fontSize: scale(14) }}>{el.name}</Text>
            <View style={{ alignItems: 'flex-end', marginLeft: "auto" }}>
              <DefaultButton
                label={'delete'}
                bg={'rgba(243, 13, 13, 0.8)'}
                bgPressed={'rgba(243, 13, 13, 0.5)'}
                textColor={'white'}
                width={scale(100)}
                fontSize={scale(13)}
                onPress={() => {
                  setListStudent(listStudent.filter((el, index) => idx !== index))
                }} />
            </View>
          </View>

        ))}
        <View style={{ marginVertical: scale(20), alignItems: "center", borderBottomWidth: 2, paddingBottom: scale(10) }}>
          <DefaultButton
            label={'add'}
            bg={'rgba(13, 115, 23, 0.8)'}
            bgPressed={'rgba(13, 115, 23, 0.5)'}
            textColor={'white'}
            width={scale(100)}
            fontSize={scale(16)}
            onPress={() => { handleSetShow(true) }} />
        </View>
        {name !== '' && (
          <View style={{
            alignItems: "center",
            marginVertical: moderateScale(100)
          }}>
            <DefaultButton onPress={() => {
              let temp = courses
              temp[route.params.idx] = { name: name, students: listStudent }
              setCourses(temp)
              navigation.navigate('CourseScreen')
            }}
              width={scale(200)}
              bg={'rgba(0, 0, 255, 1)'}
              label={'save'}
              bgPressed={'rgba(0, 0, 255, 0.7)'}
              textColor={'white'}
              fontSize={scale(16)} />
          </View>
        )}
      </ScrollView>

      {show && (
        <BottomSheet children={
          <ScrollView>
            {students.length === 0 && <Text>student not found, please add !!</Text>}
            {students.filter((el) => !listStudent.find(({ name }) => el.name === name)).map((el, idx) => (
              <TouchableOpacity onPress={() => {

                setListStudent([{ name: el.name, birthDay: el.birthDay }, ...listStudent])
                handleSetShow(false)
              }} key={idx + 'op'}>
                <Text style={[style.title, { marginVertical: scale(5) }]}>{el.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        } onClose={() => { handleSetShow(false) }} title="Add Student" />
      )}

    </DefaultContent>
  )
}


export default EditCourseScreen

const style = StyleSheet.create({
  title: {
    fontSize: moderateScale(16),
    color: "black"
  }
})