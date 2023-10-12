import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES, assets } from '../constants'


export const CircledButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
        position:'absolute',
        top:10,
        right:10,
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:COLORS.white,
        alignItems:'center',
        justifyContent:'center',
        ...SHADOWS.button
    }}
    onPress={handlePress}
    >
        <Image source={imgUrl} resizeMode='contain' style={{width:25, height:25}} />
    </TouchableOpacity>
  )
}

export const RectButton = () => {
    return (
      <View>
        <Text>Button</Text>
      </View>
    )
  }
  