// components/SentimentAnalyzer.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import vader from 'vader-sentiment';

const SentimentAnalyzer = () => {
  const [inputText, setInputText] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [score, setScore] = useState(null);

  const analyzeSentiment = () => {
    const result = vader.SentimentIntensityAnalyzer.polarity_scores(inputText);
    setSentiment(result.compound >= 0.05 ? 'positive' : result.compound <= -0.05 ? 'negative' : 'neutral');
    setScore(result.compound);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text for sentiment analysis"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Analyze" onPress={analyzeSentiment} />
      {sentiment && (
        <View style={styles.result}>
          <Text style={styles.text}>Sentiment: {sentiment}</Text>
          <Text style={styles.text}>Score: {score}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  result: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default SentimentAnalyzer;
