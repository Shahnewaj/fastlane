import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <>
      <View>
        <Text>Code push test 2</Text>
        <Text>Code push test 2</Text>
        <Text>Code push test 2</Text>
        <Text>Code push test 2</Text>
        <Text>Code push test 2</Text>
        <Text>Code push test 2</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

export default codePush(codePushOptions)(App);
