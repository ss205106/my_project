
import './App.css';
// import Header from './common/Header';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import { Route,Routes,Router } from 'react-router-dom';
import MainPage from './page/MainPage';
import StorePage from './page/StorePage';
import ItemPage from './page/ItemPage';
function App() {
  return (
    <div className="App">
        <Routes>
           <Route path='/' element={<MainPage/>}/>
          <Route path='/store' element={<StorePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/ItemPage' element={<ItemPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
