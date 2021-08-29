import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import heroImage from './assets/hero.png';

const App: React.FC = () => {
  const titlePosition = useSharedValue(30);
  const imagePositon = useSharedValue(-30);

  useEffect(() => {
    imagePositon.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        titlePosition.value = withTiming(0, {
          duration: 1000,
          easing: Easing.bounce,
        });
      },
    );
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePositon.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.hero, heroStyle]} source={heroImage} />
      <Animated.Text style={[styles.title, titleStyle]}>
        Seja bem-vindo!
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
});

export default App;
