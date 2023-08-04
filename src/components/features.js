import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function features() {
  return (
    <ScrollView style={{ height: hp(60) }} className="space-y-4">
      <Text style={{ fontSize: wp(6.5) }} className="font-semibold text-gray-700">Features</Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={ require("../../assets/images/chatgpt-icon.png") } style={{ width: wp(8), height: hp(4) }} className=""/>
          <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700">ChatGPT</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT is a chatbot developed by OpenAI that is based on the GPT-3.5 language model.
        </Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={ require("../../assets/images/chatgpt-icon.png") } style={{ width: wp(8), height: hp(4) }} className=""/>
          <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700 uppercase">DALL-E</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          DALL-E is a powerful tool that has the potential to revolutionize the way we create and interact with images. 
        </Text>
      </View>
      <View className="bg-sky-200 p-4 rounded-xl space-y-2 pb-9">
        <View className="flex-row items-center space-x-1">
          <Image source={ require("../../assets/images/chatgpt-icon.png") } style={{ width: wp(8), height: hp(4) }} className=""/>
          <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700">Smart AI</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT is a chatbot developed by OpenAI that is based on the GPT-3.5 language model.
        </Text>
      </View>
    </ScrollView>
  )
}