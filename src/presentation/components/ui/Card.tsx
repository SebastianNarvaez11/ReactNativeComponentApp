import {PropsWithChildren} from 'react';

import {StyleProp, ViewStyle} from 'react-native';
import {View} from 'react-native';
import {useThemeStore} from '../../store/themeStore';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: Props) => {
  const {colors} = useThemeStore();
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
