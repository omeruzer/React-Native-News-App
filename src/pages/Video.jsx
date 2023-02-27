import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/shared/Header'
import BottomNavigationBar from '../components/shared/BottomNavigationBar'
import VideoItem from '../components/VideoItem'
import { data } from '../data'
import { useNavigation } from '@react-navigation/native'

export default function Video() {
  const navgation = useNavigation()
  return (
    <View className="flex-1">
      <Header />
      <ScrollView className=" bg-[#f2f2f2] dark:bg-[#20202B] h-full mb-14" >
        {data.map(e => (
          <VideoItem key={e.id} id={e.id} title={e.title} subtitle={e.subtitle} img={e.img} goPage={() => navgation.navigate('Detail', { id: e.id })} />
        ))}
      </ScrollView>
      <BottomNavigationBar />
    </View>
  )
}