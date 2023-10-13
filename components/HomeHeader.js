import { View, Text, Image, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor : COLORS.primary,
      padding: SIZES.font,
    }}>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
            <Image 
              source={assets.logo}
              style={{width:90, height:25}}
              resizeMode='contain'
            />
            <View style={{width : 45, height:45}}>
              <Image 
                source={assets.person01}
                style={{width : '100%', height:'100%'}}
                resizeMode='contain'
              />
              <Image 
              source={assets.badge}
              style={{position:'absolute', top:0, right:0, width : 15, height:15}}
              resizeMode='contain'
            />

            </View>
        </View>
        <View style={{marginVertical:SIZES.font}}>
          <Text style={{fontSize:SIZES.small, color:COLORS.white, fontWeight:300}}>
              Hello, Ana 👋
          </Text>
          <Text style={{fontSize:SIZES.large, color:COLORS.white, fontWeight:500}}>
              Let's find an NFT for you
          </Text>
        </View>
        <View style={{marginTop:SIZES.font}}>
          <View>
            <Image source={assets.search} resizeMode='contain' style={{width:20, height:20, marginRight:SIZES.base}}/>
            <TextInput />
          </View>
        </View>
    </View>
  )
}

export default HomeHeader