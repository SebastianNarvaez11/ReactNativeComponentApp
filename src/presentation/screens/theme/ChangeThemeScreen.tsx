import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useThemeStore} from '../../store/themeStore';

export const ChangeThemeScreen = () => {
  const {currentTheme, setTheme, colors, setIsSystemTheme} = useThemeStore();

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />

      <Button
        text="Light"
        onPress={() => {
          setTheme('light');
          setIsSystemTheme(false);
        }}
      />

      <View style={{height: 10}} />

      <Button
        text="Dark"
        onPress={() => {
          setTheme('dark');
          setIsSystemTheme(false);
        }}
      />

      <View style={{height: 10}} />

      <Button text="System" onPress={() => setIsSystemTheme(true)} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
