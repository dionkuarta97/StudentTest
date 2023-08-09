import { ScrollView, Text, StyleSheet, View, ActivityIndicator } from "react-native"
import DefaultContent from "../../components/DefaultContent"
import AddButton from "../../components/AddButton"
import { useFocusEffect, useNavigation } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { StudentParamList } from "../../router/StudentRouter"
import { studentAtom } from "../../state"
import { useAtom } from "jotai"
import DefaultCard from "../../components/DefaultCard"
import { scale } from "react-native-size-matters"
import { useCallback, useMemo, useState } from "react"
import DefaultButton from "../../components/DefaultButton"


const StudentScreen = () => {
  const [students] = useAtom(studentAtom)
  const navigation = useNavigation<StackNavigationProp<StudentParamList>>()
  const [loading, setLoading] = useState(false)

  const getAge = (date: Date) => {
    const birth = new Date(date)
    const diff = Date.now() - birth.getTime()
    const ageDiff = new Date(diff)
    const year = ageDiff.getUTCFullYear()
    const age = Math.abs(year - 1970)
    return age
  }

  useFocusEffect(useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []))


  return (
    <DefaultContent>
      {!loading ? (
        <ScrollView>
          {students.map((el, idx) => (
            <DefaultCard last={idx + 1 === students.length} key={idx + 'asd'}>
              <View style={style.cardContainer}>
                <View style={{ width: '70%' }}>
                  <View style={style.cardContainer}>
                    <Text style={[style.text, { width: '30%' }]}>Name</Text>
                    <Text style={[style.text, { width: '10%' }]}>:</Text>
                    <Text numberOfLines={1} style={[style.text]}>{el.name}</Text>
                  </View>
                  <View style={style.cardContainer}>
                    <Text style={[style.text, { width: '30%' }]}>Age</Text>
                    <Text style={[style.text, { width: '10%' }]}>:</Text>
                    <Text numberOfLines={1} style={style.text}>{getAge(el.birthDay)} years</Text>
                  </View>
                </View>
                <View style={{ width: "30%", alignItems: 'flex-end' }}>
                  <DefaultButton
                    onPress={() => {
                      navigation.navigate('EditStudentScreen', { name: el.name, birthDate: el.birthDay, idx: idx })
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

      <AddButton onPress={() => {
        navigation.navigate('AddStudentScreen')
      }} />
    </DefaultContent>
  )
}


export default StudentScreen

const style = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: scale(14)
  },
  cardContainer: {
    flexDirection: "row"
  }
})