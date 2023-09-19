import React from   'react'
import {View,Text} from 'react-native'
import styles from './style'


export default function Header(){

    return(
            <View style = {styles.viewHeader}>

                
                <Text style={styles.textHeader}>   FILMELANDIA  </Text>
            
            </View>
    );

}