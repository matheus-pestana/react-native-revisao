import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Lampada = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={[styles.container, { backgroundColor: isEnabled ? '#FFFF00' : '#333' }]}>

                <Text style={{ color: isEnabled ? 'black' : 'white', fontSize: 20 }}>{isEnabled ? 'Apague' : 'Acenda'} a luz</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

                <Image
                    style={styles.lampada}
                    source={{ uri: isEnabled ? 'https://cdn-icons-png.flaticon.com/512/702/702797.png' : 'https://cdn-icons-png.flaticon.com/512/702/702814.png' }}
                />

                <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Ir para Home</Text>
                </Pressable>

            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lampada: {
        width: 150,
        height: 150,
    },
    button: {
        margin: 10,
        width: 150,
        height: 40,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
});

export default Lampada;

