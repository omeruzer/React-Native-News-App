import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, SafeAreaView, Image, View } from 'react-native';
import BottomNavigationBar from '../components/shared/BottomNavigationBar';
import Header from '../components/shared/Header';
import DataItem from '../components/DataItem';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data';

const Detail = (props) => {
    const [id, setId] = useState(props.route.params.id);
    const [post, setPost] = useState({});
    const getData = () => {
        const check = data.find(e => e.id == id)
        setPost(check)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <SafeAreaView className="flex-1 dark:bg-[#20202B]">
            <Header />
            <View className="p-3">
                <Image source={{ uri: post.img }} className="rounded w-full h-48" />
                <Text className='text-2xl font-semibold mt-3 dark:text-white'>{post.title}</Text>
                <Text className='text-lg mt-3 dark:text-white'  >{post.subtitle}</Text>
            </View>
        </SafeAreaView>
    );
}


export default Detail;
