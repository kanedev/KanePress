import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './src/js/routes/routes'
import Navbar from './src/js/components/Navbar';
import Header from './src/js/components/Header';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
    return (
            <View style={styles.container} >
            <Header/>
      <Text> KanePress 🤓</Text>
    </View>
    )
}



 
const styles = StyleSheet.create({
  container: {
 //   flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});



