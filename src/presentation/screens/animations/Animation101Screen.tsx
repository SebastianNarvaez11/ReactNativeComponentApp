import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import {useState} from 'react';

export const Animation101Screen = () => {
  const [isHide, setIsHide] = useState(false);

  const {
    animatedOpacity,
    animatedTranslateY,
    animatedTranslateX,
    fadeIn,
    fadeOut,
    translateAnimatedY,
    translateAnimatedX,
  } = useAnimation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          translateAnimatedX(0, 100, 750, Easing.bounce);
        }}
        onLongPress={() => translateAnimatedX(100, 0, 750, Easing.bounce)}>
        <Animated.View
          style={[
            styles.purpleBox,
            {
              opacity: animatedOpacity,
              transform: [
                {translateX: animatedTranslateX},
                {translateY: animatedTranslateY},
              ],
            },
          ]}
        />
      </Pressable>

      {isHide ? (
        <Pressable
          onPress={() => {
            fadeIn();
            translateAnimatedY(-100, 0, 750, Easing.elastic(1));
            setIsHide(false);
          }}
          style={{marginTop: 10}}>
          <Text>FadeIn</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            fadeOut();
            translateAnimatedY(0, 100, 750);
            setIsHide(true);
          }}
          style={{marginTop: 10}}>
          <Text>FadeOut</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
