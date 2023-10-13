import React from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import { NFTcard, FocusedStatusBar, HomeHeader } from '../components'
import { COLORS, NFTData } from '../constants'
import { useState } from 'react'

const Home = () => {
  
    const [nftData, setnftData] = useState()
    


  return (
    <SafeAreaView style={{flex : 1}}>
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{flex:1}}>
          <View style={{zIndex:0}}>
              <FlatList data={NFTData} 
              renderItem={({item}) => <NFTcard item={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader />}
              />
          </View>
          <View style={{position:'absolute', top:'0', bottom:'0', left:'0', right:'0', zIndex:-1}}>
            <View style={{backgroundColor:COLORS.primary, height:300}}></View>
            <View style={{backgroundColor:COLORS.white, flex:1}}></View> 
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Home