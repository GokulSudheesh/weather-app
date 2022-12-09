import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectCount, counterActions } from '@/redux/slices/counter';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.count}>{count}</Text>
      <View style={style.buttonWrapper}>
        <View style={style.button}>
          <Button title="+" onPress={handleIncrement} />
        </View>
        <View style={style.button}>
          <Button title="-" onPress={handleDecrement} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 42,
    fontWeight: '600',
  },
  buttonWrapper: {
    marginTop: 10,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});
