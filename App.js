// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SentimentAnalyzer from './components/SentimentAnalyzer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SentimentAnalyzer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
