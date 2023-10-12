import { View, Text } from 'react-native'
import { SIZES, COLORS, FONTS, SHADOWS, assets} from '../constants'
import { Image } from 'react-native'


export const  NFTTitle = ({title, subtitle, titleSize, subtitleSize }) => {
  return (
    <View style={{width:'100%', height:'50'}}>
      <Text style={{fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary}}>title</Text>
    </View>
  )
}
export const  EthPrice = () => {
    return (
      <View style={{width:'100%', height:'50'}}>
        <Text>SubInfo for</Text>
      </View>
    )
  }
export const  Imagecmp = ({imgUrl, index}) => {
    return (
        <Image
        source={imgUrl}
        resizeMode='contain'
        style={{ 
          width:48,
          height:48,
          marginLeft: index == 0 ? 0 : -SIZES.font,
          }}
        />
    )
}
export const  People = () => {
    return (
        <View style={{flexDirection : 'row'}}>
            {[assets.person01, assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <Imagecmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
            ) )}
        </View>
    )
}
export const  EndDate = () => {
    return (
        <View style={{
            paddingHorizontal:SIZES.font,
            paddingVertical:SIZES.base,
            backgroundColor:COLORS.white,
            justifyContent:'center',
            alignItems:'center',
            ...SHADOWS.light,
            elevation:1,
            maxWidth:'50%'
        }}>
        <Text style={{fontFamily:FONTS.regular, fontSize: SIZES.smail, color:COLORS.primary}}>End date</Text>
        </View>
    )
}
export const  SubInfo = () => {
    return (
        <View style={{
            width:'100%',
            paddingHorizontal:SIZES.font,
            marginTop:SIZES.extraLarge,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <People />
            <EndDate />
            <NFTTitle />
        </View>
    )
}