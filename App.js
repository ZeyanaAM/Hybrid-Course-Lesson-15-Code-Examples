import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

const FadeAnimationExample = () => {
  const fade = new Animated.Value(0);
  // console.log('fade value: ', fade);

  const fadeIn = Animated.timing(fade, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  });

  const fadeOut = Animated.timing(fade, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: true,
  });

  // fadeIn.start(() => console.log('animation complete'));

  const fadeInAndOut = Animated.sequence([fadeIn, fadeOut]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: 'orange',
          width: 100,
          height: 100,
          opacity: fade,
        }}
      />
      <Button title="Fade In Animation" onPress={() => fadeIn.start()} />
      <Button title="Fade Out Animation" onPress={() => fadeOut.start()} />
      <Button
        title="Fade In and Out Animation"
        onPress={() => fadeIn.start(() => fadeOut.start())}
      />
      <Button
        title="Fade In and Out Animation using Sequence"
        onPress={() => fadeInAndOut.start()}
      />
    </View>
  );
};

const TransformExample = () => {
  const scale = new Animated.Value(1);

  const increaseSize = Animated.timing(scale, {
    toValue: 1.5,
    duration: 1000,
    useNativeDriver: true,
  });

  const springOut = Animated.spring(scale, {
    toValue: 1.5,
    friction: 4,
    // bounciness: 5,
    useNativeDriver: true,
  });

  const decreaseSize = Animated.timing(scale, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });

  const rotate = new Animated.Value(0);
  const rotateBox = Animated.timing(rotate, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });

  // rotateBox.start();

  const degrees = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: 'orange',
          width: 100,
          height: 100,
          transform: [
            {
              scale: scale,
              rotate: degrees,
            },
          ],
        }}
      />
      <Button
        title="Scale Out Animation"
        onPress={() => increaseSize.start()}
      />
      <Button title="Scale In Animation" onPress={() => decreaseSize.start()} />
      <Button title="Spring Out Animation" onPress={() => springOut.start()} />
      <Button title="Rotate" onPress={() => rotateBox.start()} />
    </View>
  );
};

export default function App() {
  return <TransformExample />;
  // return <FadeAnimationExample />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
