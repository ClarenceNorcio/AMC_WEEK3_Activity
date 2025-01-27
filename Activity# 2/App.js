import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');

  const [value, onChangeText] = React.useState('ABOUT ME: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="NAME:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder="AGE:"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="ADDRESS:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSchool}
          value={school}
          placeholder="SCHOOL:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCourse}
          value={course}
          placeholder="COURSE:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="EMAIL:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setContact}
          value={contact}
          placeholder="CONTACT NO:"
          keyboardType="numeric"
        />
        
        <View
          style={[
            styles.container,
            {
              backgroundColor: value,
            },
          ]}
        >
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.textInput}
            placeholder="ABOUT ME:"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    padding: 10,
    height: 100, 
  },
});

export default TextInputExample;
