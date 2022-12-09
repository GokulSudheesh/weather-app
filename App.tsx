import Characters from '@/screens/Characters';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Characters />
    </Provider>
  );
}
