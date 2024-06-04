<<<<<<< HEAD

import './App.css';
// import Header from './common/Header';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import { Route,Routes,Router } from 'react-router-dom';
import MainPage from './page/MainPage';
import StorePage from './page/StorePage';
import ItemPage from './page/ItemPage';
import CommunityPage from './page/CommunityPage';
import PostPage from './page/PostPage';
import PaymentPage from './page/PaymentPage';
function App() {
  return (
    <div className="App">
        <Routes>
           <Route path='/' element={<MainPage/>}/>
          <Route path='/store' element={<StorePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/ItemPage' element={<ItemPage/>}/>
          <Route path='/Community' element={<CommunityPage/>}/>
          <Route path='/post' element={<PostPage/>}/>
          <Route path='/Payment' element={<PaymentPage/>}/>
        </Routes>
      </div>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 314b713164e80cef4fd50e0f6c214a789b68897a
  );
}

export default App;
