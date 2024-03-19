import {create} from 'zustand';
import {ThemeColors, darkColors, lightColors} from '../../config/theme/theme';

export type ThemeType = 'light' | 'dark';

interface IThemeStore {
  currentTheme: ThemeType;
  isSystemTheme: boolean;
  colors: ThemeColors;
  setTheme: (theme: ThemeType) => void;
  setIsSystemTheme: (status: boolean) => void;
}

export const useThemeStore = create<IThemeStore>()(set => ({
  currentTheme: 'light',
  isSystemTheme: false,
  colors: lightColors,

  setTheme: (theme: ThemeType) => {
    set({
      currentTheme: theme,
      colors: theme === 'light' ? lightColors : darkColors,
    });
  },

  setIsSystemTheme: (status: boolean) => {
    set({isSystemTheme: status});
  },
}));
