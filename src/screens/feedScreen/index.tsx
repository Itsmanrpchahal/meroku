import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import styled, {withTheme} from 'styled-components/native';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppLoader from '../../components/loader';
import navigationStrings from '../../navigation/navigationStrings';
import {SharedElement} from 'react-navigation-shared-element';

const FeedScreen = ({navigation}) => {
  const {feed} = useActions();
  const {loading, error, feedData} = useTypedSelector(state => state.feedData);
  const [load, setLoading] = useState(true);
  useEffect(() => {
    feed();
  }, []);

  return (
    <MainWrapper>
      {loading ? <AppLoader /> : null}

      <FlatList
        data={feedData?.photos}
        numColumns={2}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationStrings.FEEDDETIAL, {data: item});
              }}>
              <ItemWrapper>
                <SharedElement id={'item' + item.url}>
                  <ImageView
                    source={
                      load
                        ? require('../../assets/placeholder.png')
                        : {uri: item.url}
                    }
                    onLoadEnd={() => {
                      setLoading(false);
                    }}></ImageView>
                </SharedElement>

                <TextView numberOfLines={1}>{item.title}</TextView>
              </ItemWrapper>
            </TouchableOpacity>
          );
        }}></FlatList>
    </MainWrapper>
  );
};

export default withTheme(FeedScreen);

const TextView = styled.Text`
  color: black;
  padding: 4px;
`;

const ImageView = styled.Image`
  height: 80%;
  width: 100%;
  border-radius: 10px;
  resize-mode: fill;
`;
const ItemWrapper = styled.View`
  width: ${({theme}: any) => responsiveWidth(43)};
  height: ${({theme}: any) => responsiveHeight(25)};
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  margin: 5px;
`;

const MainWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;
