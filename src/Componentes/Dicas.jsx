import React, { useState } from "react";
import { Text, StyleSheet, View, Button,TextInput, Image, TouchableOpacity, ScrollView, SafeAreaView,} from "react-native";
import { styles } from "../Style/style";


export default function Dicas() {
  return(
<ScrollView  style={{backgroundColor:'yellow'}}>
  <View style={styles.dicas}>
        <View>
        <Image style={styles.dicasImg1} source={require("../../img/Logo1.png")} />

        <Text style={styles.dicasText}>
          Investimentos para Iniciantes: um guia com estratégias para quem
          quer começar
        </Text>
        <Text style={styles.dicasText2}>{`\nO invenstidor iniciante costuma ter muitas dúvidas sobre como atingir sua saúde financeira. Aprenda como começar a investir com segurança para garantir rentabilidade.`}</Text>
      </View>

      <View style={styles.dicasFlex}>
        <Text style={styles.dicasFlex1}>1. Entenda a diferença entre renda fixa e renda variável
        <Text style={styles.dicasText1}>{`\n\nNa renda fixa, você já sabe o quanto aproximadamente irá ganhar no momento que investe. \n\nNa renda variável não é possível prever. Por conta disso, os ganhos na renda variável podem ser maiores do que os da renda fixa.`}</Text>
        </Text>

        <Image style={styles.dicasFlex2} source={(require('../../img/images4.jpg'))}/>
      
      </View>

      <View style={styles.dicasFlex}>

        <Image style={styles.dicasFlex2} source={require('../../img/images1.jpg')}/>
          
        <Text style={styles.dicasFlex1}>2. Estabeleça objetivos de curto, médio e longo prazo
        <Text style={styles.dicasText1}>{`\n\nAo longo da vida todos nós passamos por diversas fases, com necessidades específicas para cada uma delas. \n\nÉ importante que você se planeje para isso.`}</Text>
        </Text> 
      </View>

      <View>
      
        <Text style={styles.dicasText}>{`\n3. Fique de olho na liquidez dos investimentos\n`}</Text>
        <Text style={styles.dicasText1}>{`\nLiquidez é a velocidade com que você consegue transformar um investimento em dinheiro líquido. Um título do Tesouro Direto tem, por exemplo, mais liquidez do que um imóvel porque se você quiser vender o título, o Tesouro garante a recompra; já o imóvel dependerá de encontrar um comprador interessado.`}</Text>

        <Text style={styles.dicasText}>{`\n4. A segurança está na diversificação\n`}</Text>
        <Text style={styles.dicasText1}>{`\nDistribua o seu dinheiro em diversas classes de ativos, tanto em renda fixa quanto variável. Na renda fixa, você pode ter vários títulos prefixados e pós-fixados como Tesouro, CDBs (Certificado de Depósito Bancário), Debêntures, CRIs (Certificado de Recebível Imobiliário), CRAs (Certificado de Recebível do Agronegócio) e assim por diante. Na renda variável, procure distribuir o dinheiro entre ações de boas empresas, em setores distintos ou em fundos imobiliários multi-ativos e multi-região.\n`}</Text>
      </View>
  </View> 
</ScrollView>
  )
}
