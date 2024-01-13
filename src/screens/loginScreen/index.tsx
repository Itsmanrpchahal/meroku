import React, {useState} from 'react';
import {SafeAreaView, NativeModules, Button, Alert} from 'react-native';
import styled, {withTheme} from 'styled-components/native';
const {RNTwitterSignIn} = NativeModules;
const LoginScreen = () => {
  const [user, setUser] = useState(null);
  const Constants = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: 'yfroXnJytKSgLBxQP2rRoUboy',
    TWITTER_CONSUMER_SECRET:
      'RW95LxoyP68cXu3FijdnUNvBVeTkn8XJcMauyq0NUlN6aTI2y7',
  };

  const Constants1 = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: 'qWPj1TXbreMX1SsDvdiQTaF7Y',
    TWITTER_CONSUMER_SECRET:
      '4t0cRfGWXZvySIa5sS0M38AnT8a8B8hwcX2lZiaStSWStD4B4Z',
  };

  const _twitterSignIn = () => {
    RNTwitterSignIn.init(
      Constants1.TWITTER_COMSUMER_KEY,
      Constants1.TWITTER_CONSUMER_SECRET,
    );
    RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log(loginData);
        const {authToken, authTokenSecret} = loginData;
        if (authToken && authTokenSecret) {
          setUser(loginData);
          Alert.alert(JSON.stringify(loginData));
        }
      })
      .catch(error => {
        Alert.alert(JSON.stringify(error));
      });
  };

  return (
    <SafeAreaView>
      <MainWrapper>
        <Button
          title="Login with Twitter"
          onPress={() => {
            _twitterSignIn();
          }}
        />
      </MainWrapper>
    </SafeAreaView>
  );
};

export default withTheme(LoginScreen);

const MainWrapper = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
