import { Provider } from 'react-redux';
import { store } from './redux/store'
import ActiveState from './components/ActiveState'
import './App.css';

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <ActiveState />
    </div>
  </Provider>
  );
}

export default App;
