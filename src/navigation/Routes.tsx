// @ts-ignore
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import navigationStrings from './navigationStrings';
import feedScreen from '../screens/feedScreen';
import feedDetail from '../screens/feedScreen/feedDetail';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import login from '../screens/login';

const Stack = createSharedElementStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.FEEDSCREEN}>
        <Stack.Screen
          name={navigationStrings.FEEDSCREEN}
          component={feedScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name={navigationStrings.FEEDDETIAL}
          component={feedDetail}
          options={{
            headerShown: true,
          }}
          sharedElements={(route, otherRoute, showing) => {
            const {item} = route?.params;
            return [`item` + route?.params?.data?.url];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
