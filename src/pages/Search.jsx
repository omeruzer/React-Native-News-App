import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/shared/Header'
import BottomNavigationBar from '../components/shared/BottomNavigationBar'
import { data } from '../data'
import DataItem from '../components/DataItem'
import { useNavigation } from '@react-navigation/native'

export default function Search() {
  const navgation = useNavigation()
  const [mainSearchPosts, setMainSearchPosts] = useState(data);
  const [searchPosts, setSearchPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.nativeEvent.text)
    if (searchText.length > 0) {
      setSearchPosts(mainSearchPosts.filter((item) =>
        String(item.title).toLowerCase().includes(searchText.toLowerCase() ||
          String(item.subtitle).toLowerCase().includes(searchText.toLowerCase()
          ))))
    } else {
      setSearchPosts([])
    }
  }
  return (
    <View className="flex-1">
      <Header />
      <View className="pb-2 dark:bg-[#20202B]">
        <TextInput value={searchText} onChange={handleChange} className="bg-white dark:bg-gray-400 mt-3 p-4 mx-3 rounded shadow-xl shadow-black" placeholder='Search' />
      </View>
      <ScrollView className="dark:bg-[#20202B]" >
        {searchPosts.length > 0 ? <>
          {searchPosts.map(e => (
            <DataItem key={e.id} id={e.id} title={e.title} subtitle={e.subtitle} img={e.img} goPage={() => navgation.navigate('Detail', { id: e.id })} />
          ))}
        </> : <>
          {
            searchText == '' ?
              <>
                <Text className="text-center mt-24 text-lg font-semibold dark:text-white">Ne Aramak İstersiniz?</Text>
              </> :
              <>
                <Text className="text-center mt-24 text-lg font-semibold dark:text-white">Herhangi bir sonuç bulunamadı</Text>
              </>
          }
        </>}
      </ScrollView>
      <BottomNavigationBar />
    </View>
  )
}