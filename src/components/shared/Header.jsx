import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import IoIcon from 'react-native-vector-icons/Ionicons'
import { useColorScheme } from 'nativewind';

export default function Header() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <View className="flex-row items-center justify-between mt-8 px-4 bg-white dark:bg-[#15202B] shadow-xl shadow-black py-3 ">
            <View><Text className="text-2xl font-semibold text-black dark:text-white">News</Text></View>
            <TouchableOpacity onPress={toggleColorScheme} >
                <IoIcon name={colorScheme == 'dark' ? 'sunny-sharp' : 'moon'} size={20} color={colorScheme == 'dark' ? '#fff' : '#000'} />
            </TouchableOpacity>
        </View>
    )
}