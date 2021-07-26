/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {DefaultButton} from './src/components';

import {colors} from './src/utils/theme';
import {DEVICE_WIDTH} from './src/utils/dimensions';

const showAlert = () => {
  Alert.alert('Buen curso!');
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Título</Text>
      <Text>Subtitulo</Text>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
        resizeMode="contain"
      />
      <DefaultButton
        onPress={showAlert}
        title={'Mensaje personalizado'}
        textSize={24}
        additionalStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.dodgerblue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.chocolate,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    aspectRatio: 1,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  },
  button: {
    backgroundColor: '#6b8e23',
  },
});

export default App;
