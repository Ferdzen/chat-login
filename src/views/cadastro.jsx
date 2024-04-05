import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from '../components/pressable';

const Cadastro = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
  
    const handleCadastro = () => {
        // Verificar se o e-mail termina com "@ifpr"
        if (email.endsWith('@ifpr.com.br')) {
            // Implemente a lógica de autenticação aqui
            // Se a autenticação for bem-sucedida, navegue para a tela de chat
            navigation.navigate('Login');
          } else {
            alert('Por favor, cadastre um e-mail IFPR para fazer login.');
        }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Acesso ao Chat</Text>
        <Text style={styles.paragraf}>Use seu e-mail e senha cadastrados para acessar o painel de conversas</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        
        <Pressable title="Cadastrar" onPress={handleCadastro}/>
        <Pressable title="Já tem uma conta? Faça login" onPress={() => navigation.navigate('Login')}/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'green'
    },
    title: {
      fontSize: 24,
      color: 'white',
      fontWeight: '700',
      marginBottom: 20,
      textAlign: 'center'
    },
    paragraf:{
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
      width: '100%',
      color: 'white',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 10,
    },
    button: {
        backgroundColor: '#03A64A',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
  });
export default Cadastro;