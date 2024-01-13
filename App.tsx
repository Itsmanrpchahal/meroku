/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Routes from './src/navigation/Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ThemeProvider, useTheme} from 'styled-components/native';
import {navigationTheme} from './src/theme/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        barStyle="default"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="#121621"
        //Background color of statusBar only works for Android
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />

      <ThemeProvider theme={navigationTheme.light}>
        <Routes scheme={navigationTheme.light} />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
