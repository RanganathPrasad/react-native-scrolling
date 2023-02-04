import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarsList from './components/CarsList'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <View style={{height:100,backgroundColor:'black',width:'100%'}}>
        <Text style={{color:'#ffffff'}}>
          {/* Footer */}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
