import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/routes/Routes';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});