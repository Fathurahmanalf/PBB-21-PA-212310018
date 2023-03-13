import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         <Image source={require('./assets/thur.jpg')}
         style={{width: 200, height: 200 ,borderRadius : 100}} />
         
      </Text>
      <Text style={styles.paragraph}> Fathurahman AL F</Text>
      <Text style={styles.paragraph, styles.fontSize}> 212310018</Text>
      <Text style={styles.paragraph, styles.fontSize}> TI-21-PA2</Text>

      
      
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderColour: '9400D3'
  },
  paragraph: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fontSize:{
    fontSize: 15,
    textAlign: 'center',
    margin: 2,
  }
});