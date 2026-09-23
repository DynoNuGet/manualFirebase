
// Importação 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
// Essa importação servirá para conectar o aplicativo com o banco Firebase e será explicada depois
import { entrar } from "../services/auth";

// Função que executa a tela de Login
export default function Login({ navigation }) {
    // Constantes email e senha para o login e os TextInputs
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função assíncrona para realizar o login, será explicada depois
    async function realizarLogin() {
        // Verifica se o e-mail e a senha estão preenchidos
        if (!email || !senha) {
            // Caso não estejam preenchidos, retorna e encerra essa função
            alert("Preencha todos os campos.")
            return
        }
        // A função tentará entrar com o email e a senha digitados
        try {
            await entrar(email, senha)
            alert("Usuário entrou com sucesso!")
            // Navega para a tela Home em um sucesso
            navigation.replace('Home')
        }
        // Caso ocorra um erro ou o email e a senha não levam a uma conta, o erro é enviado para o console
        catch (error) {
            alert("E-mail ou senha inválidos.")
            console.log(error)
        }

    }
    // Elementos que retornarão (aparecerão) na tela de Login
    return (
        // Container principal da tela de Login
        <View style={styles.container}>
            {/* Título da tela */}
            <Text style={styles.titleText}> Login </Text>
            {/* TextInputs para o e-mail e senha */}
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
            {/* Botão para navegar para a tela de Cadastro */}
            <TouchableOpacity style={styles.loginButton}
                onPress={() => { navigation.navigate('Cadastro') }}>
                <Text style={styles.loginText}> Não possui uma conta? Cadastre-se </Text>
            </TouchableOpacity>
            {/* Botão para realizar o login */}
            <TouchableOpacity style={styles.registerButton}
                onPress={realizarLogin}>
                <Text style={styles.registerText}> Logar </Text>
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