import React from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import { NFTcard, FocusedStatusBar, HomeHeader } from '../components'
import { COLORS, NFTData } from '../constants'

const Home = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
        <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  )
}

export default Home