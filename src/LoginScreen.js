
import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // With backend, handle authentication here
    // Navigate to the dashboard on successful login
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView className="flex-1 justify-center bg-gray-100 p-6">
      <View className="mb-6">
        <Text className="text-3xl font-bold text-center text-blue-500">Login</Text>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        className="bg-white p-4 rounded-lg shadow-md mb-4"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        className="bg-white p-4 rounded-lg shadow-md mb-6"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 py-2 px-6 rounded-lg shadow-md"
      >
        <Text className="text-white text-center">Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
