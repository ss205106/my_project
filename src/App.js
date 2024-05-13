
import './App.css';
// import Header from './common/Header';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import { Route,Routes,Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
