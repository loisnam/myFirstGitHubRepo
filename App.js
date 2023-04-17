import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './HelloWorld';
import CoreComponents from './CoreComponents';
import Cafe from './CatsCafe';
import PizzaTranslator from './PizzaTranslator';
import ScrollViewExample from './ScrollViewExample';
import FlatListExample from './FlatListExample';


export default function App() {
  return (
    
      <FlatListExample/>
   
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
