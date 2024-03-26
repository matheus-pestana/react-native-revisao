import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import IMC from '../pages/IMC';
import Lampada from '../pages/Lampada';
import Login from '../pages/Login';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='IMC'
                component={IMC}
            />
            <Stack.Screen
                name='Lampada'
                component={Lampada}
            />
        </Stack.Navigator>

    );
}