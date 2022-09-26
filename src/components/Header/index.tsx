import {
   View,
   Text,
   StatusBar,
   TouchableOpacity,
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'

import { styles } from './styles'

interface Props {
   name: string;
}

export function Header({ name }: Props) {
   return (
      <View style={styles.conteiner}>
         <MotiView
            from={{
               translateY: -150,
               opacity: 0,
            }}
            animate={{
               translateY: 0,
               opacity: 1,
            }}
            transition={{
               type: 'spring',
               duration: 800,
               delay: 300,
            }}
            style={styles.content}>
            <MotiText
               style={styles.userName}
               from={{
                  translateX: -300,
               }}
               animate={{
                  translateX: 0,
               }}
               transition={{
                  type: 'spring',
                  duration: 800,
                  delay: 800,
               }}
            >
               {name}
            </MotiText>

            <TouchableOpacity
               activeOpacity={0.7}
               style={styles.buttonUser}
            >
               <Feather
                  name='user'
                  size={27}
                  color="#fff"
               />
            </TouchableOpacity>
         </MotiView>
      </View>
   )
}