// Importação
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
// Será explicado depois
// Essa importação servirá para conectar o aplicativo com o banco Firebase e será explicada depois
import { cadastrar } from "../services/auth";

// Função que executa a tela de Cadastro
export default function Cadastro({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função assíncrona para realizar o cadastro, será explicada depois
    async function realizarCadastro() {
        // Verifica se o email e a senha estão preenchidos
        if (!email || !senha) {
            // Se não estiverem preenchidos, alerta o usuário e encerra a função retornando-a
            alert("Preencha todos os campos.")
            return
        }
        // A função tentará cadastrar um usuário no banco Firebase com o email e a senha especificadas
        try {
            await cadastrar(email, senha)
            // Alerta o usuário que deu certo, e o leva para a página de login
            alert("Usuário cadastrado com sucesso!")
            navigation.navigate('Login')
        }
        // Caso ocorra um erro, o "catch" o pegará, alertará o usuário e manda o erro no console
        catch(error) {
            alert("Não foi possível realizar o cadastro.")
            console.log(error)
        }
        
    }
    // Elementos que retornarão (aparecerão) na tela de Cadastro
    return(
        // Container principal da tela de cadastro
        <View style={styles.container}>
            {/* Título da tela de cadastro */}
            <Text style={styles.titleText}> Cadastro </Text>
            {/* TextInputs para o e-mail e senha do usuário */}
            <TextInput style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            {/* Botão que realiza redirecionamento para a tela de Login */}
            <TouchableOpacity style={styles.loginButton}
                onPress={()=>{navigation.navigate('Login')}}> 
                <Text style={styles.loginText}> Já possui uma conta? Faça login </Text>
            </TouchableOpacity>
            {/* Botão para realizar o cadastro */}
            <TouchableOpacity style={styles.registerButton}
                onPress={realizarCadastro}> 
                <Text style={styles.registerText}> Cadastrar </Text>
            </TouchableOpacity>
        </View>
    )
}

// Constante da estilização
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 40,
    },
    input: {
        borderRadius: 50,
        paddingHorizontal: 20,
        padding: 10,
        backgroundColor: '#FFF',
        color: '#000',
        fontSize: 20,
        width: '80%',
        marginBottom: 20,
    },
    registerButton: {
        backgroundColor: '#000',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
    },
    registerText: {
        fontSize: 24,
        color: '#FFF',
    },
    loginText: {
        fontSize: 20,
        color: '#08F',
    },
    loginButton: {
        marginBottom: 50,
    },
})