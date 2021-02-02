import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import Copyright from './components/Copyright';

export default function App() {

  function onPressLearnMore () {
    Alert.alert('Bonjour')
  }
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={sHeader.container}>
        <Text style={sHeader.text}>Yoki</Text>
      </View>

      <View style={sButton.container}>
        <TouchableOpacity onPress={onPressLearnMore}>
          <View style={sButton.button}>
              <Text style={sButton.text}>Scanner</Text>
          </View> 
        </TouchableOpacity>
      </View>

      <ScrollView style={sScroll.container}>
        <TouchableOpacity onPress={() => Alert.alert("Hello World")}>
          <View style={sScrollItem.container}>
            <Text style={sScrollItem.title}>Chocapic fort en chocolat</Text>
            <Text style={sScrollItem.subtitle}>Scanné hier à 18h</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Copyright 
          /* Ne pas oublier les accolades pour du JS comme un tableau */
          ping={"pong"} 
          tableauEnProps={[1,2,4,5]}
          tic={"tac"} 
          promotion={"RIL CAEN"} />

    </View>
  );
}


const sScrollItem = StyleSheet.create({
    container: {
      paddingLeft: 40,
      paddingVertical: 20,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
    },
    subtitle : {
      fontSize: 18
    },
    title : {
      fontSize: 26
    }
});
const sButton = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  button: {
    backgroundColor: 'grey',
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  text : {
    textAlign: 'center',
    fontSize: 24,
    textTransform: 'uppercase'
  }
})

const sScroll = StyleSheet.create({
  container: {
  }
})
const sHeader = StyleSheet.create({
  text : {
    fontSize: 24, 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'lightgrey',
    paddingTop: 45,
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
