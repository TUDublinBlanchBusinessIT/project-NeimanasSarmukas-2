import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const Employer1 = () => {
  const [company, setCompany] = useState('');
  const [hours, setHours] = useState(0);
  const [date, setDate] = useState('');
  const [requirements, setRequirements] = useState('');
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register your company!</Text>

      <TextInput
        label="Company Name"
        value={company}
        onChangeText={setCompany}
        style={styles.input}
      />

      <Text style={styles.sliderLabel}>Hours: {hours}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={12}
        step={1}
        value={hours}
        onValueChange={(value) => setHours(value)}
      />

      <TextInput
        label="Date Required"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      <TextInput
        label="Are There Special Requirements"
        value={requirements}
        onChangeText={setRequirements}
        style={styles.input}
      />

       <Button
        mode="contained"
        onPress={() => navigation.navigate('employer2')}
        style={styles.button}>
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
});

export default Employer1;