import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={style.input}
          onChangeText={setName}
          value={name}
          placeholder="NAME:"
        />
        <TextInput
          style={style.input}
          onChangeText={setAge}
          value={age}
          placeholder="AGE:"
          keyboardType="numeric"
        />
        <TextInput
          style={style.input}
          onChangeText={setAddress}
          value={address}
          placeholder="ADDRESS:"
        />
        <TextInput
          style={style.input}
          onChangeText={setSchool}
          value={school}
          placeholder="SCHOOL:"
        />
        <TextInput
          style={style.input}
          onChangeText={setCourse}
          value={course}
          placeholder="COURSE:"
        />
        <TextInput
          style={style.input}
          onChangeText={setEmail}
          value={email}
          placeholder="EMAIL:"
        />
        <TextInput
          style={style.input}
          onChangeText={setContact}
          value={contact}
          placeholder="CONTACT NO:"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
