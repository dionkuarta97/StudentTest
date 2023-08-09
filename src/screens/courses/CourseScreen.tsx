import { useFocusEffect, useNavigation } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native"
import { CourseParamList } from "../../router/CourseRouter"
import AddButton from "../../components/AddButton"
import DefaultContent from "../../components/DefaultContent"
import { useCallback, useState } from "react"
import { useAtom } from "jotai"
import { courseAtom } from "../../state"
import DefaultCard from "../../components/DefaultCard"
import { scale } from "react-native-size-matters"
import DefaultButton from "../../components/DefaultButton"



const CourseScreen = () => {
  const [loading, setLoading] = useState(false)
  const [courses] = useAtom(courseAtom)
  useFocusEffect(useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []))

  const navigation = useNavigation<StackNavigationProp<CourseParamList>>()
  return (
    <DefaultContent>
      {!loading ? (
        <ScrollView>
          {courses.map((el, idx) => (
            <DefaultCard last={idx + 1 === courses.length} key={idx + 'asd'}>
              <View style={style.cardContainer}>
                <View style={{ width: '70%' }}>
                  <View style={style.cardContainer}>
                    <Text style={[style.text, { width: '40%' }]}>Name</Text>
                    <Text style={[style.text, { width: '10%' }]}>:</Text>
                    <Text numberOfLines={1} style={[style.text]}>{el.name}</Text>
                  </View>
                  <View style={style.cardContainer}>
                    <Text style={[style.text, { width: '40%' }]}>Student Total</Text>
                    <Text style={[style.text, { width: '10%' }]}>:</Text>
                    <Text numberOfLines={1} style={style.text}>{el.students.length}</Text>
                  </View>
                </View>
                <View style={{ width: "30%", alignItems: 'flex-end' }}>
                  <DefaultButton
                    onPress={() => {
                      navigation.navigate('EditCourseScreen', { name: el.name, student: el.students, idx: idx })
                    }}
                    label={'Edit'}
                    bg={'rgba(245, 204, 39, 0.8)'}
                    bgPressed={'rgba(245, 204, 39, 0.4)'}
                    textColor={'black'}
                    width={scale(50)}
                    fontSize={scale(16)} />
                </View>
              </View>
            </DefaultCard>
          ))}
        </ScrollView>
      ) : <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={'blue'} size={scale(50)} />
      </View>}
      <AddButton onPress={() => navigation.navigate('AddCourseScreen')} />
    </DefaultContent>
  )
}

export default CourseScreen

const style = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: scale(14)
  },
  cardContainer: {
    flexDirection: "row"
  }
})