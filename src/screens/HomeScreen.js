import { Text,View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Features from '../components/features';
import { dunmyMessages } from '../constants';

const HomeScreen = () => {

  const [messages, setMessages] = useState(dunmyMessages)
  const [recording, setRecording] = useState(false)
  const [spaceking, setSpaceking] = useState(true)

  const clear = () =>{
    setMessages([])
  }

  const stopSpeaking = () =>{
    setSpaceking(false)
  }

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 flex mx-5 mt-5">
        {/* icon bot */}
        <View className="flex-row justify-center">
          <Image style={{ height: hp(13), width: wp(25)}} source={require('../../assets/images/robot.png')}/>
        </View>
        {/* features || messages */}
        {
          messages.length > 0 ?(
            <View className="spacce-y-2 flex-1">
              <Text style={{ fontSize:wp(5) }} className="text-gray-700 font-semibold ml-1">
                assistant
              </Text>
              <View style={{ height: wp(120) }} className="bg-neutral-200 rounded-3xl p-4">
                <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}
                >
                  {
                   messages.map((messages,index) => {
                    if(messages.role === 'assistant'){
                      if(messages.content.includes('https')){
                        /// ai image
                        return(
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-sky-200 rounded-tl-none">
                            <Image
                              source={{ uri: messages.content }}
                              className="rounded-2xl"
                              resizeMode='contain'
                              style={{ height: wp(60), width: wp(60) }}
                            />
                          </View>
                          </View>
                        )
                      }else{
                        //text response
                        return(
                          <View key={index} className="flex-row">
                            <Text
                            style={{ fontSize: wp(3.5) }} 
                            className="text-gray-700 bg-sky-200 p-2 rounded-xl rounded-tl-none"
                            >
                              {messages.content}
                            </Text>
                          </View>
                        )
                      }
                    }else{
                      //user input
                        return(
                          <View key={index} className="flex-row justify-end">
                            <Text
                            style={{ fontSize: wp(3.5), width: wp(70)}} 
                            className="text-gray-700 bg-white p-2 rounded-xl rounded-tr-none"
                            >
                              {messages.content}
                            </Text>
                          </View>
                        )

                    }
                    
                   })
                  }
                </ScrollView>
              </View>
             
            </View>
          ): (
            <Features />
          )
        }
         {/* clear and stop button */}
         <View className="flex justify-center items-center pb-5">
          {
            recording?(
                <TouchableOpacity>
                  <Image
                    style={{ width: wp(30), height: wp(30) }}
                    source={require("../../assets/images/icn_microActive.gif")}
                  />
                </TouchableOpacity>
              ):(
                <TouchableOpacity>
                  <Image
                    style={{ width: wp(20), height: wp(20) }}
                    source={require("../../assets/images/icn_micro.png")}
                  />
                </TouchableOpacity>
            )
          }
         
         { 
          messages.length > 0 && (
            <TouchableOpacity 
            onPress={clear}
            className="bg-gray-500 p-2 absolute right-10 rounded-2xl">
              <Text className="text-white font-semibold">Clear</Text>
            </TouchableOpacity>
          )
         }

         { 
          spaceking && (
            <TouchableOpacity 
            onPress={stopSpeaking}
            className="bg-red-500 p-2 absolute left-10 rounded-2xl">
              <Text className="text-white font-semibold">Stop</Text>
            </TouchableOpacity>
          )
         }
         </View>
      </View>
    </View>
  );
};

export default HomeScreen;