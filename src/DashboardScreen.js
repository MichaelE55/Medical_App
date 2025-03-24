

import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-blue-500 py-4">
        <Text className="text-white text-center text-3xl font-bold">Patient Dashboard</Text>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 p-6">
        {/* Welcome Text */}
        <Text className="text-xl font-semibold text-gray-700 mb-4">Welcome back, John Doe</Text>

        {/* Health Information Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800">Your Health Information</Text>
          <View className="bg-white rounded-lg shadow-md p-4 mt-4">
            <Text className="text-gray-600">Age: 30</Text>
            <Text className="text-gray-600">Blood Type: O+</Text>
            <Text className="text-gray-600">Medical Conditions: Asthma</Text>
          </View>
        </View>

        {/* Upcoming Appointments Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800">Upcoming Appointments</Text>
          <View className="bg-white rounded-lg shadow-md p-4 mt-4">
            <Text className="text-gray-600">Dr. Smith - Cardiologist</Text>
            <Text className="text-gray-600">Date: 2025-03-25</Text>
            <Text className="text-gray-600">Time: 2:00 PM</Text>
          </View>
        </View>

        {/* Button to View All Appointments */}
        <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-lg shadow-md mt-4">
          <Text className="text-white text-center">View All Appointments</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View className="bg-gray-800 py-4">
        <Text className="text-white text-center text-sm">© 2025 MedPortal. All rights reserved.</Text>
      </View>
    </SafeAreaView>
  );
}
