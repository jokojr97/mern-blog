import logo from '../assets/images/logo.svg';
import { RouteApps, store } from '../config';
import { Provider } from "react-redux"
import './App.css';

function App() {
  return (
    <Provider store={store}  >
      <RouteApps />
    </Provider>
  );
}

export default App;
