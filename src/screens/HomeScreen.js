import { Text,View , TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const HomeScreen = () => {
  return (
    <View className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
            <Text style={{ fontSize: wp(10) }} className="text-center font-bold text-gray-700 text-4xl">
              Jarvis
            </Text>
            <Text style={{ fontSize: wp(4) }} className="text-center text-gray-600 font-semibold">
              The Future is here, powered by AI
            </Text>
      </View>
      <View className="flex-row justify-center">
        <Image source={require('../../assets/images/img_welcome.png')}  style={{ width: wp(80), height: wp(80) }}/>
      </View>
      <TouchableOpacity 
      className="bg-gray-600 mx-5 p-4 rounded-2xl"
      >
        <Text className="text-center font-bold text-white text-2xl">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;