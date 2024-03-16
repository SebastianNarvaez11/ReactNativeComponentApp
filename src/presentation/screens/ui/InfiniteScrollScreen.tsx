import {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

interface ListItemProps {
  number: number;
}

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  const ListItem = ({number}: ListItemProps) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${number}/500/400`}
        style={{
          height: 400,
          width: '100%',
        }}
      />
    );
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};
