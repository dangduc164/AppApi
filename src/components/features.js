import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function features() {
  return (
    <View style={{ height: hp(60) }} className="space-y-4">
      <Text style={{ fontSize: wp(6.5) }}>features</Text>
      <View className="flex-row items-center space-x-1">
        <Image source={ require("../../assets/images/chatgpt-icon.png") } style={{ width: wp(4), height: hp(4) }} className=""/>
        <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700">ChatGPT</Text>
      </View>
    </View>
  )
}