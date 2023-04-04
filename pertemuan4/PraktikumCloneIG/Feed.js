import React from 'react';
import {View, StyleSheet , Text , SafeAreaView, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { UserFeedObj } from './Data';



const Feed = () => {
    return (
        <SafeAreaView style={{flex : 1}}>
        <View style={styles.container}>

            <View>
            <Image 
              style={styles.image}  
              source={require('../assets/boy.png')} /> 
              <Text style={{ color: "white", fontSize: 16,}}></Text>
              </View>
              
            

         </View> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container : {
    backgroundColor : 'black',
    padding : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
 
    },

    image : {
        width: 40, 
        height: 40,
        borderWidth: 2,
        marginLeft: 6,
        borderColor: "white",
        borderRadius: 100,
    },
    



})

export default Feed;