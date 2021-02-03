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
import ProductModal from './Pages/ProductModal';

export default function App() {

  const [page, setPage] = useState('LISTE');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const [products, setProducts] = useState([{
    id: '3029330003533',
    name: 'Produit test',
    barcode: '3029330003533'
  },{
    id: '3017620422003',
    name: 'Nutella',
    barcode: '3017620422003'
  }]);

  function onPressLearnMore() {
    Alert.alert('Bonjour')
  }

  /*
  La variable item est envoyée depuis ProductItem.js
  */
  function onItemPress(item){
    //console.log(item);
    //alert('Je clique sur ' + item.name);
    setCurrentItem(item);
    setModalVisible(true);
    
    //alert(`Je clique sur ${item.barcode}`);
  }
 
  const addToList = (product) => {
      console.log('Add depuis App.js');
      setProducts([...products, product])
      setPage('LISTE');
  }

  const toggleModal = () => {
    let _vibility = modalVisible;
    setModalVisible(!_vibility);

    if(modalVisible === true){
      setCurrentItem(null);
    }
  }

/*   return (
    <Demo/>
  ) */

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ProductModal 
        item={currentItem}
        toggle={toggleModal} 
        visible={modalVisible}/>
      
      {
        page === 'LISTE' && (
          <Liste 
            items={products}
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
          <Camera addToList={addToList}/>
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
