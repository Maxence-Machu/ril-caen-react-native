import React, {useState, useEffect} from 'react'
import { Modal, SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';

export default function ProductModal({
    visible,
    toggle,
    item
}){

    const [fullItem, setFullItem ] = useState(null);

    useEffect(() => {
        if(visible === true){
            getProductFromApi(item.barcode);
        }
    }, [visible])

    const getProductFromApi = async (barcode) => {
        try {
            let response = await fetch(
             `https://fr.openfoodfacts.org/api/v0/produit/${barcode}.json`
            );
            let responseJson = await response.json();
            console.log(responseJson)
            setFullItem(responseJson.product);
          } catch (error) {
            console.error(error);
          }        
    }  

    if(item === null || fullItem === null){
        return null;
    }

    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
          <AppHeader title={item.name}/>

          <Text>{fullItem.ingredients_text_with_allergens}
          </Text>
          <Button title="FERMER" onPress={toggle}/>
      </Modal>
    )
}