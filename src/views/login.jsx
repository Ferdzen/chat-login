import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from '../components/pressable';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../services/firebaseConf';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        
        const usuarios = collection(db, "usuarios");
        const q = query(usuarios, where("email", "==", email));

        const dados = await getDocs(q);

        dados.forEach(dado => {
            console.log(dado.data());

            if(dado.data().password == password){
                alert('Logado com sucesso!');
                navigation.navigate('Chat');
            }else{
                alert('Senha incorreta');
            }
        });
        //alert(dados);
        //console.log(dados)
        // Verificar se o e-mail termina com "@ifpr"
        /*if (email.endsWith('@ifpr.com.br')) {
            // Implemente a lógica de autenticação aqui
            // Se a autenticação for bem-sucedida, navegue para a tela de chat
            navigation.navigate('Chat');
        } else {
            alert('Por favor, use um e-mail do IFPR para fazer login.');
        }*/
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
            <Pressable title="Logar" onPress={handleLogin} />
            <Pressable title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'green',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center'
    },
    paragraf: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        width: '100%',
        height: 40,
        color: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
});
export default Login;