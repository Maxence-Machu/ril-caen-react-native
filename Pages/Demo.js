import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput,  Button, Image, Alert } from 'react-native';
import AppHeader from '../components/AppHeader';
import { StatusBar } from 'expo-status-bar';

export default function Demo(){

    const [age, setAge] = useState(0);

    const [keyword, setKeyword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [taille, setTaille] = useState(0);
    const [poids, setPoids] = useState(0);
    const [IMC, setIMC] = useState(0);

    /*
    Exécuter une fonction à la mise à jour du composant
    */
   /*
   useEffect(() => {
       Alert.alert('Je me met à jour')
   })*/

    /*
    Exécuter une fonction au chargement du composant
    */
   useEffect(() => {
       //Alert.alert('Je charge')
   }, [])

    /*
    Exécuter une fonction à la modification de "taille"
    */
   useEffect(() => {
       //Alert.alert('Je met à jour taille')
   }, [taille])

    /*
    Exécuter une fonction à la modification de "poids"
    */
   useEffect(() => {
       //Alert.alert('Je met à jour poids')
   }, [poids])

    /*
    Exécuter une fonction à la modification de "poids" + "taille"
    */
   useEffect(() => {
       //Alert.alert('Je met à jour poids ou taille');
        console.log(poids, taille)
        if(poids !== 0 && taille !== 0){
            calculerIMC();
        }
   }, [poids, taille])

    function calculerIMC(){
        let _IMC = poids / (taille^2);
        _IMC = _IMC.toFixed(1)
        setIMC(_IMC);
    }

    function ajouterAge(){
        let _age = age; 
        _age += 1; 
        setAge(_age);
    }

    function reduireAge(){
        let _age = age; 
        _age -= 1; 
        setAge(_age);
    }

    function chargerImage(){
        let _url = `https://loremflickr.com/320/240/${keyword}`
        setImageUrl(_url);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
    
            <AppHeader title="Démo state" />

            <Text style={styles.text}>Bonjour, j'ai actuellement {age} ans</Text>

            <Button onPress={ajouterAge} title="Prendre une année"/>
            <Button onPress={reduireAge} title="Retirer une année"/>


            <Text>Votre mot clé:</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setKeyword(text)}
                value={keyword}
            />

            <Text>{imageUrl}</Text>
        
            <Button onPress={chargerImage} title="Charger l'image"/>

            {/* Rendu conditionnel avec une variable de state */}
            {
                imageUrl != '' ? 
                    <Image
                    style={{width: 320, height: 240}}
                    source={{
                        uri: imageUrl,
                    }}
                /> : <Text>Merci de renseigner un mot clé</Text>
            }

            {/* Rendu conditionnel avec une variable de state */}
            {/*
                imageUrl != '' && 
                    <Image
                    style={{width: 320, height: 240}}
                    source={{
                        uri: imageUrl,
                    }}
                />*/
            }

            <Text>Calcul de l'IMC</Text>
            <Text>Votre taille (en m)</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTaille(text)}
                value={taille}
                keyboardType='decimal-pad'
            />

            <Text>Votre poids (en kg)</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={poids => setPoids(poids)}
                value={poids}
                keyboardType='decimal-pad'
            />

            <Button onPress={calculerIMC} title="Calculer l'IMC"/>

            {
                IMC !== 0 && (
                    <Text>Votre IMC est de {IMC}</Text>
                )
            }


           
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginTop: 5
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
  