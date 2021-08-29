import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const App: React.FC = () => {
  const titlePosition = useSharedValue(30);

  useEffect(() => {
    setTimeout(() => {
      titlePosition.value = 0;
    }, 2000);
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, titleStyle]}>
        E aí, Robert!
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
});

export default App;
