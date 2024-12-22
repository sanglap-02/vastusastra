import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { verifyOTP } from './helper';
import styles from './styles';

const OtpScreen = ({ route, navigation }) => {
  const { verificationId } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = async () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter the OTP.');
      return;
    }
    const success = await verifyOTP(verificationId, otp);
    if (success) {
      Alert.alert('Success', 'You are logged in!');
      navigation.navigate('Home'); // Adjust as needed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Verify OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OtpScreen;
