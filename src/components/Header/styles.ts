import { StatusBar, StyleSheet } from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export const styles = StyleSheet.create({
   conteiner: {
      flexDirection: 'row',
      backgroundColor: '#8000ff',
      paddingTop: statusBarHeight,
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 60,
   },

   content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   userName: {
      fontSize: 18,
      color: "#FFF",
      fontWeight: 'bold',
   },

   buttonUser: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 44 / 2,
   },
})