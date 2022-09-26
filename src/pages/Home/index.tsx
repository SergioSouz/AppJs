import { View, Text, FlatList } from 'react-native';

import { Balance } from '../../components/Balance';
import { Header } from '../../components/Header'
import { Movements } from '../../components/Movements';
import { Actions } from '../../components/Actions';


import { styles } from './style'


const list = [
   { id: 1, label: 'Boleto conta luz', value: '300,90', date: '02/02/2022', type: 0 }, // tipe: 0 => despesas
   { id: 2, label: 'Pix Cliente x', value: '2.500,00', date: '17/05/2022', type: 1 }, // tipe: 1 => =>receitas => entradas
   { id: 3, label: 'Salário', value: '7.200,00', date: '22/09/2022', type: 1 }, // tipe: 1 =>receitas => despesas
]


export default function Home() {
   return (
      <View style={styles.container} >
         <Header name='Sergio Souza' />
         <Balance saldo='15.000,00' gastos='390,00' />

         <Actions />

         <Text style={styles.titleMovimentacao}> Últimas movinemtações</Text>
         <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements data={item} />}

         />


      </View>
   );
}

