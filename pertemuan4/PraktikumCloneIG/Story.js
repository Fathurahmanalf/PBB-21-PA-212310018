import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { Users } from './Data';
import { ScrollView } from 'react-native';

const Story = () => {
    return (
        <View style={{marginBottom:13, padding: 5, backgroundColor: 'black'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Users.map((v, index) =>(
            <View key={index}>
                <Image source={( v.gender === "M")? require('../assets/boy.png') : require('../assets/female.png')}
                style={{...styles.img}} />
                <Text style={{textAlign : 'center', color: 'white'}}>{v.name}</Text>

            </View>
          ))};
          </ScrollView>
        </View>
            
        
    );
}

const styles = StyleSheet.create({
    img:{
        width: 70, 
        height: 70,
        borderWidth: 4,
        marginLeft: 6,
        borderColor: "white",
        borderRadius: 100,
    },
})

export default Story;
