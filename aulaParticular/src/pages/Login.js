import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === '12345') {
            Alert.alert('Login realizado com sucesso.');
            navigation.navigate('Home');
            setUsername('');
            setPassword('');
        } else {
            Alert.alert('Erro', 'Por favor, verifique suas credenciais.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.senaiLogo}
                        source={{ uri: 'https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png' }}
                    />
                </View>

            </View>

            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    placeholder='Nome de usuário'
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    value={password}
                    onChangeText={setPassword}
                    keyboardType='numeric'
                />

                <Pressable
                    style={styles.pressable}
                    onPress={handleLogin}>
                    <Text style={styles.pressableText}>Login</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'end',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    senaiLogo: {
        width: 350,
        height: 100,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        width: 300,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray'
    },
    pressable: {
        width: 200,
        height: 50,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressableText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
