import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {Animation101Screen} from '../screens/animations/Animation101Screen';
import {SwitchScreen} from '../screens/switches/SwitchScreen';
import {AlertScreen} from '../screens/alerts/AlertScreen';
import {PullToRefreshScreen} from '../screens/ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../screens/ui/CustomSectionListScreen';
import {InfiniteScrollScreen} from '../screens/ui/InfiniteScrollScreen';

const Stack = createStackNavigator();

export const RootNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Animation101Screen"
        component={Animation101Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SwitchScreen"
        component={SwitchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
