import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator()

export default function App() {

  return (

    <PaperProvider>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} 
          options={{headerShown:false}} />
          <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{headerShown:false}}  />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}





 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
