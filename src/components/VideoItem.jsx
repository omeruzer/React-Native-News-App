import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function VideoItem({ id, title, subtitle, img, goPage }) {
    return (
        <View className="p-2">
            <TouchableOpacity onPress={() => goPage()} className="bg-white dark:bg-[#1E2732]  basis-1/2 p-3 rounded-md shadow-lg shadow-black">
                <View>
                    <Image source={{ uri: img }} className="rounded" style={{ width: null, height: 200 }} />
                    <View className="absolute flex-row w-full h-full justify-center items-center">
                        <View className=" bg-black opacity-80 p-4 h-24 w-24 flex-row justify-center items-center rounded-full" >
                            <Icon name="play" color={'#fff'} size={24} />
                        </View>
                    </View>
                </View>
                <Text className="text-xl font-semibold my-2 dark:text-white">{title}</Text>
                <Text className="text-sm text-gray-400 font-semibold">{subtitle}</Text>
            </TouchableOpacity>
        </View>
    )
}