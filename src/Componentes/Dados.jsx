import React, { createContext, useState } from 'react';
import { Text, StyleSheet,View, Button, TextInput, Image, TouchableOpacity} from "react-native";
import { styles } from '../Style/style';




export default function Dados({navigation}){

    const [dados, setDados] = useState({
        agencia:'',
        contaCorrente:'',
    });

    return (
        <View style={styles.dados}>
        
            <View>
                <Image style={styles.dadosImg} source={require('../../img/Logo1.png')}/>
                </View>
            
                <Text style={styles.dadosText}>Bem Vindo a sua conta SoulMili</Text>

            
                <TextInput style={styles.dadosTextInput} placeholder='Digite sua agência' keyboardType="numeric" defaultValue={dados.agencia} onChangeText={(valor) => setDados ({...dados, agencia:valor})}/>
        
                
                <TextInput style={styles.dadosTextInput}  placeholder='Digite sua Conta'  keyboardType="numeric" defaultValue={dados.contaCorrente} onChangeText={(valor) => setDados ({...dados, contaCorrente:valor})}/>

                <Text style={styles.dadosText1}>{`\nAgência Bancária: ${dados.agencia}`}</Text>

                <Text style={styles.dadosText1}>{`\nConta: ${dados.contaCorrente}`}</Text>

                <TouchableOpacity title="Login"
                            onPress={() => navigation.navigate('Form')}/>
                <TouchableOpacity style={styles.dadosTouch}  onPress={() => navigation.navigate ('Cash')}>
                
                <View><Text style={styles.dadosTouchText}>Login</Text></View></TouchableOpacity> 
                <Text>Não Sou SoulMili</Text>
                
        
        </View>
    )
}
