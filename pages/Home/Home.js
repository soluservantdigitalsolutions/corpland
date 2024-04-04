import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="bg-red-500">
          <Text >fdfgdfgdf</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home