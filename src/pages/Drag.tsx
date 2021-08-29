import React from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Drag: React.FC = () => {
  const posX = useSharedValue(0);
  const posY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event: any, ctx: any) => {
      ctx.posX = posX.value;
      ctx.posY = posY.value;
    },
    onActive: (event: any, ctx: any) => {
      posX.value = ctx.posX + event.translationX;
      posY.value = ctx.posY + event.translationY;
    },
    onEnd: () => {},
  });

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: posX.value}, {translateY: posY.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {width: 150, height: 150, backgroundColor: 'red'},
            positionStyle,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Drag;
