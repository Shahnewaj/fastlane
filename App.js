import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import codePush from 'react-native-code-push';
import LoginScreen from './src/screen/LoginScreen';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <LoginScreen />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});
let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

export default codePush(codePushOptions)(App);
