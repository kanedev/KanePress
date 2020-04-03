import React from 'react'
import { StyleSheet, Text,TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () =>  {
    return (
                

        <View style={styles.container} >
           
        <TouchableWithoutFeedback onPress={() => alert('Pressed!')} >
        <Icon name="bars" color="white" size={25}></Icon>
        
        </TouchableWithoutFeedback>

 
     <Text style={styles.title} > KANEPRESS 🤓</Text>


        <TouchableWithoutFeedback onPress={() => alert('Pressed!')} >
        <Icon name="search" color="white" size={25}></Icon>
        
        </TouchableWithoutFeedback>
        
        </View>
      
  
    )
}
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:90,
        alignItems: 'center',
        backgroundColor:'blue',
        justifyContent: 'space-between',
        paddingHorizontal:15,
        paddingTop:10
    },
    title: {
        //   flex: 1,
           color: '#fff',
           fontSize: 14,
           fontWeight: "bold"
           // alignItems: 'center',
           // justifyContent: 'center',
         },


  });



export default Header ;