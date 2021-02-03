import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import AppHeader from './components/AppHeader';
import Copyright from './components/Copyright';
import ProductItem from './components/ProductItem';
import ScanButton from './components/ScanButton';
import Camera from './Pages/Camera';
import Demo from './Pages/Demo';
import Liste from './Pages/Liste';

const ITEMS = [
  {
    id: '1',
    name: 'Chocapic',
    date: '21/01/2021'
  },{
    id: '2',
    name: 'CocoPops',
    date: '22/01/2021'
  },{
    id: '3',
    name: 'Golden Grams',
    date: '23/01/2021'
  }
]
export default function App() {

  const [page, setPage] = useState('LISTE');

  function onPressLearnMore() {
    Alert.alert('Bonjour')
  }

  /*
  La variable item est envoyée depuis ProductItem.js
  */
  function onItemPress(item){
    //console.log(item);
    //alert('Je clique sur ' + item.name);
    alert(`Je clique sur ${item.name}`);
  }
 

/*   return (
    <Demo/>
  ) */

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {
        page === 'LISTE' && (
          <Liste 
            items={ITEMS}
            onPressButton={onPressLearnMore}
            onPressItem={onItemPress}
          />
        )
      }
      
      {
        page === 'DEMO' && (
          <Demo/>
        )
      }
      
      {
        page === 'CAMERA' && (
          <Camera/>
        )
      }


      <SafeAreaView style={sTabs.container}>
        <TouchableOpacity style={sTabs.tab} onPress={() => {setPage('LISTE')}}>
          <Text style={sTabs.text}>Liste</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sTabs.tab} onPress={() => {setPage('CAMERA')}}>
          <Text style={sTabs.text}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sTabs.tab} onPress={() => {setPage('DEMO')}}>
          <Text style={sTabs.text}>Demo</Text>
        </TouchableOpacity>
      </SafeAreaView>  

    </View>
  );
}

const sTabs = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  tab: {
    paddingVertical: 20,
    borderColor: 'grey',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
})

const sScroll = StyleSheet.create({
  container: {
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
