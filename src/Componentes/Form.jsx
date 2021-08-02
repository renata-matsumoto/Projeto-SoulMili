import React, { useState } from 'react';
import { Text, StyleSheet,View, Button, TextInput, Image, TouchableOpacity} from "react-native";
import { styles } from '../Style/style';



export default function Dados({navigation}){

    const [dados, setDados] = useState({
        valor:0,
        acr:0.70,
        saldo:0
      
    });

    const [resultado, setResultado] = useState(0);

    const [saldo,setSaldo] = useState(1000);



    return (
        <View style={styles.dados}>

            <View>
                <Image style={styles.formImg} source={require('../../img/Logo1.png')}/>
            </View>
           
            <Text style={styles.dadosText}>Dados para Depósito</Text>

            <View style={styles.formText5}>
            <Text style={styles.formText3}>{`Saldo Atual:R$ ${saldo + resultado + dados.valor }`}</Text>     
 
            </View>
            <View style={styles.form}>

                <Text style={styles.formText1}>Agência:</Text>
                <TextInput style={styles.formInput}  placeholder='Digite a Agência'  keyboardType="numeric"/>

            </View>

            
            <View style={styles.form}>

                <Text style={styles.formText1}>Conta Corrente:</Text>

                <TextInput style={styles.formInput}  placeholder='Digite a Conta Corrente'  keyboardType="numeric"/>

            </View>
            
            <View style={styles.form}>

                <Text style={styles.formText1}>Valor do Depósito: R$</Text>

                
                <TextInput placeholder="Digite o valor" keyboardType="numeric" style={styles.formInput} 
            onChangeText={
                (valor) => setDados ({
                    ...dados, valor:  parseInt(valor)          })
            }/>

            </View>

            <View>
                
                <Text style={styles.formText1}>{`Total a ser depositado depois da Alegria SoulMili`}</Text>     
                <Text style={styles.formText2}>{`       R$ ${resultado + dados.valor}`}</Text> 

                <TouchableOpacity style={styles.formTouch} onPress={() => setResultado(dados.valor * dados.acr)}>
                <View><Text style={styles.formTouchText}>Depositar</Text></View></TouchableOpacity>                 

            </View>

            <View style={styles.formText5}>
               <Text style={styles.formText4}>Quero fazer um pix</Text>
               <Image source={require('../../img/pix.png')} style={styles.formImg1}/>
            </View>



          


         

        
            
        </View>
    )
}
