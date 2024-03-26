import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.senaiLogo}
                        source={{ uri: 'https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png' }}
                    />
                </View>

                <View style={styles.buttonContainer}>

                    <Text style={styles.title}>Navegação</Text>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Lampada")}>
                        <Text style={styles.buttonText}>Ir para lâmpada</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("IMC")}>
                        <Text style={styles.buttonText}>Ir para tela do IMC</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Sair</Text>
                    </Pressable>

                </View>

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
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        margin: 30,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        margin: 10,
        width: 250,
        height: 50,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
});

