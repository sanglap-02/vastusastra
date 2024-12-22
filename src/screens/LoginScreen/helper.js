export const sendOTP = async (phoneNumber) => {
  try {
    return 1;
  } catch (error) {
    console.error('Error sending OTP:', error);
    alert('Failed to send OTP. Please try again.');
    return null;
  }
};
