import { View, Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SHADOWS, SIZES, assets } from '../constants'
import { CircledButton, RectButton } from './Button'



const NFTcard = ({item}) => {
  const navigation = useNavigation()
  return (
    <View style={{
      backgroundColor:'lightblue',
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.card,
      }}>
        <View style={{width:'100%', height:250}}>
          <Image
            source={item.image}
            resizeMode='cover'
            style={{ 
              width:'100%',
              height:'100%',
              borderRadius: SIZES.font,
              }}
           />
           <CircledButton imgUrl={assets.heart} right={10} top={10} />
        </View>
      <Text>NFTcard</Text>
    </View>
  )
}

export default NFTcard