import {
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
} from 'react-native';
import { useState } from 'react';
import Character from '@/components/Character';
import { useGetCharactersQuery } from '@/redux/services/ricknmorty';
import { Result } from '@/interfaces/rnmCharacter.interface';

const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetCharactersQuery(page);

  const renderItem = ({ item, index }: { item: Result; index: number }) => {
    return <Character name={item.name} imageUrl={item.image} />;
  };

  const handleNextClick = () => {
    setPage((state) => state + 1);
  };

  const handlePrevClick = () => {
    setPage((state) => state - 1);
  };

  return (
    <SafeAreaView style={style.container}>
      {isFetching && <ActivityIndicator size={100} animating={isFetching} />}
      {!isFetching && data && (
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item: Result) => item.id.toString()}
        />
      )}
      <View style={style.pagination}>
        <View>
          <Button title="<" disabled={page === 1} onPress={handlePrevClick} />
        </View>
        <View>
          <Button title=">" onPress={handleNextClick} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Characters;

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
