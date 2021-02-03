import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);


    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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