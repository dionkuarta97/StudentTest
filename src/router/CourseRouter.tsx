

import { TransitionPresets, createStackNavigator } from "@react-navigation/stack"
import CourseScreen from "../screens/courses/CourseScreen"
import AddCourseScreen from "../screens/courses/AddCourseScreen"
import { Student } from "../state"
import { RouteProp } from "@react-navigation/core"
import EditCourseScreen from "../screens/courses/EditCourseScreen"

export type CourseParamList = {
  CourseScreen: undefined
  AddCourseScreen: undefined
  EditCourseScreen: { name: string, student: Student[], idx: number }

}


const Course = createStackNavigator<CourseParamList>()
export type CourseRouteProps<RouteName extends keyof CourseParamList> = RouteProp<
  CourseParamList,
  RouteName>


const CourseRouter = () => {
  return (
    <Course.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
      <Course.Screen options={{
        title: 'Course',
      }} component={CourseScreen} name='CourseScreen' />
      <Course.Screen options={{
        title: 'Add Course',
      }} component={AddCourseScreen} name='AddCourseScreen' />
      <Course.Screen options={{
        title: "Edit Course",

      }} name='EditCourseScreen' component={EditCourseScreen} />
    </Course.Navigator>
  )
}


export default CourseRouter