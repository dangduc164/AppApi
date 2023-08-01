import { Text,View, Image } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 flex mx-5 mt-5">
        <View className="flex-row justify-center">
          <Image style={{ height: hp(13), width: wp(25)}} source={require('../../assets/images/robot.png')}/>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;