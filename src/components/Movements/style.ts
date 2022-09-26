import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
   conteiner: {
      flex: 1,
      marginBottom: 24,
      borderBottomWidth: 0.5,
      borderBottomColor: '#DADADA',
   },

   date: {
      color: '#DADADA',
      fontWeight: 'bold',
   },

   content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
      marginBottom: 8,

   },

   label: {
      fontWeight: 'bold',
      fontSize: 16,
   },

   value: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2ecc71',

   },

   expende: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#e74c3c',
   },
   skeleton: {
      marginTop: 6,
      width: 80,
      height: 10,
      backgroundColor: '#dadada',
      borderRadius: 8,
   }
});