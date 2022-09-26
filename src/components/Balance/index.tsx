import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
   saldo: string,
   gastos: string,
}
import { MotiView } from 'moti'

export function Balance({ saldo, gastos }: Props) {
   return (
      <MotiView
         style={styles.container}
         from={{
            rotateX: '-100deg',
            opacity: 0,
         }}
         animate={{
            rotateX: '0deg',
            opacity: 1,
         }}
         transition={{
            type: 'timing',
            delay: 300,
            duration: 900,
         }}
      >

         <View>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
               <Text style={styles.currencySymbol}>R$</Text>
               <Text style={styles.balance}>{saldo}</Text>
            </View>
         </View>

         <View>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
               <Text style={styles.currencySymbol}>R$</Text>
               <Text style={styles.expenses}>-{gastos}</Text>
            </View>
         </View>

      </MotiView>
   );
}