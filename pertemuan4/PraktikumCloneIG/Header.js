import React from 'react';
import {View, StyleSheet , Text , SafeAreaView, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Header = () => {
    return (
        <SafeAreaView style={{flex : 1}}>

        <View style={styles.container}>

            <View>
            <Image 
              style={styles.image}  
              source={require('../assets/ig.png')} />
              </View>
         

            <View style={styles.iconsContainer}>
            <FontAwesome5 name={'heart'} size={25} color={'white'} style={styles.icon}/>
            <FontAwesome5 name={'paper-plane'} size={25} color={'white'}  style={styles.icon}/>
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
    alignItems : 'center'
        

    },

    image : {
        width:110 , 
        height: 30 

    },

    iconsContainer :{
        flexDirection : 'row' ,
        resizeMode : 'contain'
    },
    icon : { 
        marginLeft : 10 ,
        width : 30,
        height : 30 ,
        marginLeft : 10 ,
        resizeMode : 'contain'


    }
    



})

export default Header;