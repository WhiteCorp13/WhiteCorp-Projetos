import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  
  const [textoDoText, setTextoDoText] = useState(null)
  const [bordaBaixoDireita,setBordaBaixoD] = useState(null)
  const [bordaBaixoEsquerda, setBordaBaixoE] = useState(null)
  const [bordaSuperiorDireita, setBordaSuperiorD] = useState(null)
  const [bordaSuperiorEsquerda, setBordaSuperiorE] = useState(null)
  const [apertado, setApertado] = useState(false)


  function trocaValor(entrada, trocaBorda){

    if(apertado == true){
      setBordaBaixoD(entrada)
      setBordaBaixoE(entrada)
      setBordaSuperiorD(entrada)
      setBordaSuperiorE(entrada)
    }else{
      trocaBorda(entrada)
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={[styles.view, {
        borderBottomLeftRadius:parseInt(bordaBaixoEsquerda),
        borderBottomRightRadius:parseInt(bordaBaixoDireita),
        borderTopLeftRadius:parseInt(bordaSuperiorEsquerda),
        borderTopRightRadius:parseFloat(bordaSuperiorDireita)}]}></View>


      <TextInput value={bordaBaixoEsquerda}
      placeholder={"Canto inferior esquerdo"}
      onChangeText={(text)=>trocaValor(text, setBordaBaixoE)}>
      </TextInput>

      <TextInput value={bordaBaixoDireita}
      placeholder={"Canto inferior direito"}
      onChangeText={(text)=>trocaValor(text, setBordaBaixoD)}>
      </TextInput>
      
      <TextInput value={bordaSuperiorEsquerda}
      placeholder={"Canto superior esquerdo"}
      onChangeText={(text)=>trocaValor(text, setBordaSuperiorE)}>
      </TextInput>
      
      <TextInput value={bordaSuperiorDireita}
      placeholder={"Canto superior direito"}
      onChangeText={(text)=>trocaValor(text, setBordaSuperiorD)}>
      </TextInput>

      <Button onPress={()=>setApertado(!apertado)}></Button>

      {
        (apertado)
        ?
        <View style={[styles.sinal, {backgroundColor:"green"}]}></View>
        :
        <View style={[styles.sinal, {backgroundColor:"#fa7f72"}]}></View>
      }
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
  view:{
    backgroundColor:"red",
    width:400,
    height:400
  },
  sinal:{
    width:20,
    height:20
  }
});

/*
      <Text style={[styles.texto, {color:"green"}]}>{textoDoText}</Text>
      <TextInput value={textoDoText} onChangeText={(batata)=>setTextoDoText(batata)}></TextInput>
*/