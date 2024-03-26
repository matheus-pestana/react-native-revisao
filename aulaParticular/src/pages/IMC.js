import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IMC({ navigation }) {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState(null);

    const calcula = () => {
        if (!peso || !altura) {
            Alert.alert('teste')
            return;
        };

        const pesoFloat = parseFloat(peso);
        const alturaFloat = parseFloat(altura) / 100;
        const imcResult = pesoFloat / (alturaFloat * alturaFloat);
        setIMC(imcResult.toFixed(2));

    }
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>

                <Pressable style={styles.buttonVoltar} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.voltarText}>Ir para Home</Text>
                </Pressable>

                <Text>Peso(Kg):</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu peso'
                    value={peso}
                    onChangeText={setPeso}
                />

                <Text>Altura(Cm)</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua altura'
                    value={altura}
                    onChangeText={setAltura}
                />

                <Pressable
                    style={styles.button}
                    onPress={calcula}>
                    <Text style={styles.buttonText}>Calcular IMC</Text>
                </Pressable>

                {imc && (
                    <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
                )}

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
        justifyContent: 'center',
    },
    input: {
        padding: 10,
        width: 300,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray'
    },
    buttonVoltar: {
        margin: 10,
        width: 100,
        height: 30,
        backgroundColor: "gray",
        justifyContent: 'center',
        alignItems: 'center',
    },
    voltarText: {
        color: 'white',
        fontSize: 15,
    },
    button: {
        margin: 10,
        width: 150,
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
