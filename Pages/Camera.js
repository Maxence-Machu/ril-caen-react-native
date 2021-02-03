import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera({addToList}){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const getProductFromApi = async (barcode) => {
        try {
            let response = await fetch(
             `https://fr.openfoodfacts.org/api/v0/produit/${barcode}.json`
            );
            let responseJson = await response.json();
            return responseJson.product;
          } catch (error) {
            console.error(error);
          }        
    }  

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);

        let _product = await getProductFromApi(data);

        let _newProduct = {};
        _newProduct.name = _product.generic_name_fr;
        _newProduct.barcode = data;
        _newProduct.id = _product.id;
        _newProduct.scan_date = new Date().toISOString();
        
        addToList(_newProduct);

        setScanned(false);

        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    return (
        <View style={{flex: 1}}>
            <AppHeader title="Caméra" />

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    )
}