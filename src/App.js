import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About/About';
import Blogs from './components/pages/Blogs/Blogs';
import Home from './components/pages/Home/Home';
import Menubar from './components/Share/Menubar/Menubar';
import SignIn from './components/pages/Sign/SignIn/SignIn'
import SignUp from './components/pages/Sign/SignUp/SignUp';
import UserProfile from './components/Share/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/user-profile' element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
