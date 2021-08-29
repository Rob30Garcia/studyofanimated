import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

// import { Container } from './styles';

const Drag: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{width: 150, height: 150, backgroundColor: 'red'}}
      />
    </View>
  );
};

export default Drag;
