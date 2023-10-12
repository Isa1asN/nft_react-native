import { View, Text } from 'react-native'
import { SIZES, COLORS, FONTS, SHADOWS, assets} from '../constants'



export const  NFTTitle = () => {
  return (
    <View style={{width:'100%', height:'50'}}>
      <Text>SubInfo for</Text>
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
export const  Imagecmp = () => {
    return (
        <View style={{width:'100%', height:'50'}}>
        <Text>SubInfo for</Text>
        </View>
    )
}
export const  People = () => {
    return (
        <View style={{flexDirection : 'row'}}>
        <Text>SubInfo for</Text>
        </View>
    )
}
export const  EndDate = () => {
    return (
        <View style={{width:'100%', height:'50'}}>
        <Text>SubInfo for</Text>
        </View>
    )
}
export const  SubInfo = () => {
    return (
        <View style={{
            width:'100%',
            paddingHorizontal:SIZES.font,
            marginTop:SIZES.extraLarge,
            borderWidth:1,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
        <Text>SubInfo for</Text>
        </View>
    )
}