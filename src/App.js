import './App.css';
import {Provider} from 'react-redux'
import store from './redux/Store';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Desserts from './pages/Desserts';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Provider store = {store}>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/desserts' element={<Desserts/>}/>
      </Routes>
     

    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
