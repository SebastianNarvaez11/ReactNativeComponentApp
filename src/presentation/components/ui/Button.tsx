import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {useThemeStore} from '../../store/themeStore';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;

  onPress: () => void;
}

export const Button = ({text, styles, onPress}: Props) => {
  const {colors} = useThemeStore();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        styles,
      ]}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
