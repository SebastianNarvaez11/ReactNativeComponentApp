import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {RootNavigationStack} from './presentation/navigation/RootNavigationStack';
import {useThemeStore} from './presentation/store/themeStore';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';

export default function App() {
  const {currentTheme, setTheme, isSystemTheme} = useThemeStore();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (isSystemTheme) {
      if (colorScheme === 'light') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
  }, [isSystemTheme, colorScheme, setTheme]);

  return (
    <NavigationContainer
      theme={currentTheme === 'light' ? DefaultTheme : DarkTheme}>
      <RootNavigationStack />
    </NavigationContainer>
  );
}
