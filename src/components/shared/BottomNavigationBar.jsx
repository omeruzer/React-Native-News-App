import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useColorScheme } from 'nativewind';

const BottomNavigationBar = (props) => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const navigation = useNavigation();

    return (
        <View className="absolute bottom-0 w-full">
            <View className="flex-row items-center justify-between mt-8 px-12 bg-white dark:bg-[#15202B] shadow-lg shadow-black py-4 ">
                <TouchableOpacity onPress={() => navigation.navigate('Home')} ><Icon name="home" size={25} color={colorScheme == 'dark' ? '#fff' : '#000'}/></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} ><Icon name="search" size={25} color={colorScheme == 'dark' ? '#fff' : '#000'}/></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Video')} ><Icon name="play" size={25} color={colorScheme == 'dark' ? '#fff' : '#000'}/></TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Settings')} ><Icon name="gear" size={25} /></TouchableOpacity> */}
            </View>
        </View>
    );
}

export default BottomNavigationBar;
