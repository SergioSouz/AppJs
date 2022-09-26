import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,

} from 'react-native';

import { ButtonActions } from '../ButtonActions';


import { styles } from './styles';

export function Actions() {
   return (
      <ScrollView
         style={styles.container}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
      >
         <ButtonActions
            title='Entradas'
            icon='addfolder'
         />
         <ButtonActions
            title='Compras'
            icon='tagso'
         />
         <ButtonActions
            title='Carteira'
            icon='creditcard'
         />
         <ButtonActions
            title='Boletos'
            icon='barcode'
         />
          <ButtonActions
            title='Conta'
            icon='setting'
         />

      </ScrollView>
   );
}