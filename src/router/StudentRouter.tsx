

import { createStackNavigator, TransitionPresets, } from "@react-navigation/stack"
import StudentScreen from "../screens/students/StudentScreen"
import AddStudentScreen from "../screens/students/AddStudentScreen"
import EditStudentScreen from "../screens/students/EditStudentScreen"
import { RouteProp, } from '@react-navigation/core';

export type StudentParamList = {
  StudentScreen: undefined
  AddStudentScreen: undefined
  EditStudentScreen: { name: string, birthDate: Date, idx: number }
}


const Student = createStackNavigator<StudentParamList>()

export type StudentRouteProps<RouteName extends keyof StudentParamList> = RouteProp<
  StudentParamList,
  RouteName>


const StudentRouter = () => {
  return (
    <Student.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
      <Student.Screen options={{
        title: 'Student',
      }} component={StudentScreen} name='StudentScreen' />
      <Student.Screen options={{
        title: "Add Student",

      }} name='AddStudentScreen' component={AddStudentScreen} />
      <Student.Screen options={{
        title: "Edit Student",

      }} name='EditStudentScreen' component={EditStudentScreen} />
    </Student.Navigator>
  )
}


export default StudentRouter