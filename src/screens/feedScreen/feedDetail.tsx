import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import styled, {withTheme} from 'styled-components/native';

const FeedDetail = (props: any) => {
  return (
    <MainWrapper>
      <SharedElement
        style={{height: 200, width: '100%'}}
        id={'item' + props.route.params.data.url}>
        <ImageWrapper
          source={{uri: props.route.params.data.url}}></ImageWrapper>
      </SharedElement>
      <TextView>{props.route.params.data.title}</TextView>
    </MainWrapper>
  );
};

export default withTheme(FeedDetail);

const TextView = styled.Text`
  color: black;
  font-size: 22px;
`;

const ImageWrapper = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: fill;
`;

const MainWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: 16px;
`;
