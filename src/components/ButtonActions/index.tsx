import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   TouchableOpacityProps,

} from 'react-native';

import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
   title: string;
   icon: any
}

export function ButtonActions(prop: Props) {
   return (
      <TouchableOpacity style={styles.actionButton}>
         <View style={styles.ariaButton}>
            <AntDesign name={prop.icon} size={24} color="#000" />
         </View>
         <Text style={styles.labelbutton}>{prop.title}</Text>
      </TouchableOpacity>
   );
}