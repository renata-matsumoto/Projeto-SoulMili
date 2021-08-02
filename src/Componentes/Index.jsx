import React from 'react';
import { Text, StyleSheet,View, Button, Image} from "react-native";
import {styles} from '../Style/style';



export default function Index({navigation}){
    return (
        <View style={styles.index}>

           <View style={styles.index1}>
               <Image source={require('../../img/Logo1.png')} style={styles.indexImg}/>
            </View>


        </View>
    )
}
