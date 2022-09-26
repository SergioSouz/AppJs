import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MotiView, MotiText, AnimatePresence } from 'moti'

import { styles } from './style';




export function Movements({ data }: any) {

   const [showValue, setShowValue] = useState(false)

   return (
      <TouchableOpacity style={styles.conteiner} onPress={() => setShowValue(!showValue)}>
         <Text style={styles.date}>{data.date}</Text>

         <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            {showValue ? (
               <AnimatePresence exitBeforeEnter>
                  <MotiText
                     from={{ translateX: 100 }}
                     animate={{ translateX: 0 }}
                     transition={{ type: 'timing', duration: 500 }}
                     style={data.type === 1 ? styles.value : styles.expende}>
                     {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                  </MotiText>
               </AnimatePresence>

            ) : (
               <AnimatePresence exitBeforeEnter>
                  <MotiView
                     style={styles.skeleton}
                     from={{ translateX: 100 }}
                     animate={{ translateX: 1 }}
                     transition={{ type: 'timing' }}
                  ></MotiView>
               </AnimatePresence>)
            }
         </View>

      </TouchableOpacity >
   );
}