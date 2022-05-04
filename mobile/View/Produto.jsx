import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

import {useState} from 'react';

export default function Produto(){

    const [nome, setNome]= useState('');
    const [codBarras, setCodBarras] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [geoloc, setGeoLoc] = useState('');


    return(

        <View>
            <Text>Produto</Text>
                <TextInput onChangeText={()=> setNome(valor)}
                style={css.input} 
                keyboardType='numeric' 
                placeholder = "Nome"/>
                <TextInput onChangeText={()=> setLocalidade(valor)}
                style={css.input} 
                placeholder = 'Localidade'/>
                <TextInput onChangeText={()=> setGeoLoc(valor)}
                style={css.input} 
                placeholder = 'Geolocalizaçao'/>
                <TextInput onChangeText={()=> setCodBarras(valor)}
                style={css.input} 
                placeholder = 'Codigo de Barras'/>
                < Button title = 'Cadastrar'/>


        </View>


    )
}

const css = StyleSheet.create({
    input:{
        height:40,
        marginTop: 10
    }
})