import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, StatusBar, View, ScrollView} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Index from './src/Componentes/Index';
import Form from './src/Componentes/Form';
import Dicas from './src/Componentes/Dicas';
import Dados from './src/Componentes/Dados';



const Tab = createBottomTabNavigator();

export default function App() {
  return (

  
    <NavigationContainer>
     

      <StatusBar/>
      
   
      <Tab.Navigator initialRouteName="Home" screenOptions={({route}) => ({
        tabBarIcon: ({color,size}) => {
          let iconName;
          switch(route.name){
            case "Home":
              iconName = "home";
              break;
            case "Dados":
              iconName = "person-outline";
              break;
            case "Cash":
              iconName = "cash-outline";
            break;
            case "Dicas":
              iconName = "information-circle-outline";
            break; 
          } 
          return<Ionicons name={iconName} size={size} color={color} />
        }
        }) } 
        
        tabBarOptions={{
          activeTintColor: '#9DB4C0',
          inactiveTintColor: '#253237',
        }}>


        <Tab.Screen name='Home' component={Index}/>
        <Tab.Screen name='Dados' component={Dados}/>
        <Tab.Screen name='Cash' component={Form}/>
        <Tab.Screen name='Dicas' component={Dicas}/>

     

      </Tab.Navigator>


  </NavigationContainer>

  );
}

