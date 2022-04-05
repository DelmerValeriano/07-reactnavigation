import React from 'react';
import {Text,StyleSheet,View,Button} from 'react-native';


export const Nosotros = ({navigation,route}) => {

    const {clienteId} = route.params;

    const volver=()=>{
        // navigation.goBack();
        navigation.navigate('Inicio');
        // navigation.push('Inicio')
    }
  return (
    <View style={styles.contenedor}>

        <Text>{clienteId}</Text>
        <Button title="Volver" onPress={()=>volver()}/>
    </View>
  )
}

const styles = StyleSheet.create({

    contenedor:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    }

});