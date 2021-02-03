import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import ScanButton from '../components/ScanButton';
import ProductItem from '../components/ProductItem';

export default function Liste({items, onPressButton, onPressItem }){

  const renderItem = ({ item }) => {    
    return (
      <ProductItem item={item} onPress={onPressItem}/> 
    )
  };

    return(
        <View style={{flex: 1}}>
            <AppHeader title="Accueil" />

            <ScanButton text="Bouton" onPress={onPressButton}/>

            <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    )
}