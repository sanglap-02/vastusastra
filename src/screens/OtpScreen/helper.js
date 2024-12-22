export const verifyOTP = async (verificationId, otp) => {
  try {
    return true;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    alert('Invalid OTP. Please try again.');
    return false;
  }
};
