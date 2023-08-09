import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { scale } from "react-native-size-matters";
import type { NavigatorScreenParams } from '@react-navigation/native'
import StudentRouter, { StudentParamList } from "./StudentRouter";
import CourseRouter, { CourseParamList } from "./CourseRouter";



export type RooterParamList = {
  StudentRouter: NavigatorScreenParams<StudentParamList>;
  CourseRouter: NavigatorScreenParams<CourseParamList>;
}

const Root = createBottomTabNavigator<RooterParamList>()

const Router = () => {
  return (
    <Root.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarIconStyle: {
        display: "none"
      },
      tabBarLabelPosition: "beside-icon",
      headerShown: false
    }}>
      <Root.Screen options={{
        tabBarLabel: 'Student',
        tabBarLabelStyle: {
          fontSize: scale(16)
        }
      }} component={StudentRouter} name={'StudentRouter'} />
      <Root.Screen options={{
        tabBarLabel: 'Course',
        tabBarLabelStyle: {
          fontSize: scale(16)
        }
      }} name='CourseRouter' component={CourseRouter} />
    </Root.Navigator>
  )
}


export default Router