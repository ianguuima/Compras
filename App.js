import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { DefaultTheme, Provider as PapeProvider } from 'react-native-paper'
import Routes from './src/routes'

// Redux stuff
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/index'

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PapeProvider theme={theme}>
          <View style={styles.container}>
            <Routes />
          </View>
        </PapeProvider>
      </PersistGate>
    </Provider>
  );
}

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#DF2935',
    accent: '#86BA90',
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
