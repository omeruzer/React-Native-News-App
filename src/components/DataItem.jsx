import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const DataItem = ({ id, title, subtitle, img,goPage }) => {
    return (
        <View className="p-2">
            <TouchableOpacity onPress={() => goPage()} className="bg-white dark:bg-[#1E2732] basis-1/2 p-3 rounded-md shadow-lg shadow-black">
                <Image source={{ uri: img }} className="rounded" style={{ width: null, height: 200 }} />
                <Text className="text-xl font-semibold my-2 dark:text-white">{title}</Text>
                <Text className="text-sm text-gray-400 font-semibold">{subtitle}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default DataItem;
