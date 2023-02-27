import React, { useLayoutEffect } from 'react';
import { View, FlatList, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import BottomNavigationBar from '../components/shared/BottomNavigationBar';
import Header from '../components/shared/Header';
import DataItem from '../components/DataItem';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data/index';

const Home = () => {
    const navgation = useNavigation();
    return (
        <SafeAreaView className="flex-1">
            <Header />
            <ScrollView className=" bg-[#f2f2f2] dark:bg-[#20202B] h-full mb-14" >
                {data.map(e => (
                    <DataItem key={e.id} id={e.id} title={e.title} subtitle={e.subtitle} img={e.img} goPage={() => navgation.navigate('Detail', { id: e.id })} />
                ))}
            </ScrollView>
            <BottomNavigationBar />
        </SafeAreaView>
    );
}

export default Home;
