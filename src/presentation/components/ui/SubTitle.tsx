import {Text} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeStore} from '../../store/themeStore';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor: string;
}

export const SubTitle = ({text, safe = false}: Props) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useThemeStore();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: colors.background,
      }}>
      {text}
    </Text>
  );
};
