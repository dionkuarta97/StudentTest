import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale, verticalScale } from 'react-native-size-matters'


type Props = {
  date: Date,
  open: boolean,
  onOpen: () => void,
  onClose: () => void,
  onConfirm: (val: Date) => void
}

const PickDate = ({ date, open, onOpen, onClose, onConfirm }: Props) => {


  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onOpen()}>
        <View pointerEvents='none'>
          <TextInput
            value={date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
            editable={false}
            style={style.input} />
        </View>

      </TouchableOpacity>
      <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
          onClose()
          onConfirm(date)
        }}
        onCancel={() => {
          onClose()
        }}
      />
    </>
  )
}

export default PickDate


const style = StyleSheet.create({
  input: {
    width: '100%',
    height: verticalScale(35),
    borderWidth: 1,
    marginVertical: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(8),
    backgroundColor: "rgb(240, 240, 240)",
    color: "black"
  }
})