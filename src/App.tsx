import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigationStack} from './presentation/navigation/RootNavigationStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigationStack />
    </NavigationContainer>
  );
}
