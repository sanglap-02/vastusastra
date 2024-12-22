import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { sendOTP } from './helper';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = async () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a valid phone number.');
      return;
    }
    const verificationId = await sendOTP(phoneNumber);
    if (verificationId) {
      navigation.navigate('OtpScreen', { verificationId });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send OTP" onPress={handleSendOTP} />
      <Text style={styles.signupText} onPress={() => navigation.navigate('SignupScreen')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

export default LoginScreen;
