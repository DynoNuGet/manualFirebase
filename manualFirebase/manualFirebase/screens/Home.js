// Importação
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Serve para autenticação e sair da conta, será explicado depois
import { auth } from "../config/firebase";
import { sair } from "../services/auth";

export default function Home({ navigation }) {
    const [pontos, setPontos] = React.useState(0);
    const [ganho, setGanho] = React.useState(1);

    // Função para sair da conta, será explicada depois
    async function realizarLogout() {
        await sair();
        alert("Usuário saiu com sucesso!");
        navigation.replace('Login');
    }
    
    // O e-mail que será exibido para o usuário, se não conseguir encontrar o e-mail do usuário, será exibido "Usuário"
    const emailUsuario = auth.currentUser?.email || 'Usuário';

    // Elementos que retornarão (aparecerão) na tela Home
    return (
        // Container principal para a tela Home
        <View style={styles.container}>
            {/* Container para o card, que conterá o e-mail do usuário */}
            <View style={styles.card}>
                <Text style={styles.welcomeText}>Seja bem-vindo(a)!</Text>

                {/* Outro container para uma área cinza com o e-mail do usuário */}
                <View style={styles.userInfoContainer}>
                    <Text style={styles.label}>Logado como:</Text>
                    <Text style={styles.emailText}>{emailUsuario}</Text>
                </View>
                {/* Botão para sair da conta */}
                <TouchableOpacity style={styles.buttonLogout} 
                onPress={realizarLogout}>
                    <Text style={styles.buttonText}>Sair da conta</Text>
                </TouchableOpacity>

            </View>
            {/* Container para sistema de pontos */}
            <View style={styles.pointView}>
                {/* Botão de ganhar pontos */}
                <TouchableOpacity style={styles.pointButton}
                    onPress={() => setPontos(pontos + ganho)}>
                    <Text style={styles.pointText}> Pontos: {pontos} </Text>
                </TouchableOpacity>
                {/* Botão de melhoria de pontos */}
                <TouchableOpacity style={styles.pointButton}
                    onPress={() => {
                        if (pontos >= ganho*10) {
                            setPontos(pontos-ganho*10)
                            setGanho(ganho+1)
                        }
                    }}>
                    <Text style={styles.pointText}> Melhoria de pontos: (${ganho*10}) </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Constantes de estilização
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 10,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
    userInfoContainer: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 24,
    },
    label: {
        fontSize: 12,
        color: '#000',
        marginBottom: 4,
    },
    emailText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    buttonLogout: {
        backgroundColor: '#000',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    pointView: {
        width: '100%',
        height: '12%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    pointButton: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        marginHorizontal: 5
    },
    pointText: {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    }
});