
import './App.css';
// import Header from './common/Header';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import { Route,Routes,Router } from 'react-router-dom';
import MainPage from './page/MainPage';
import StorePage from './page/StorePage';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/store' element={<StorePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        
         
        </Routes>
      </div>
  );
}

export default App;
