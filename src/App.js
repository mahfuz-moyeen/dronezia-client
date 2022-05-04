import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About/About';
import Blogs from './components/pages/Blogs/Blogs';
import Home from './components/pages/Home/Home/Home';
import Menubar from './components/Share/Menubar/Menubar';
import UserProfile from './components/Share/UserProfile/UserProfile';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/Share/Footer/Footer';
import SignIn from './components/pages/Login/SignIn/SignIn';
import SignUp from './components/pages/Login/SignUp/SignUp';
import Inventory from './components/pages/Home/Inventory/Inventory';
import RequireAuth from './components/pages/Login/RequireAuth/RequireAuth';
import InventoryItem from './components/pages/InventoryItem/InventoryItem';
import ManageInventory from './components/pages/ManageInventory/ManageInventory/ManageInventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App bg-base-200">

      {/* menubar */}
      <Menubar />
      {/* All page  */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/inventory' element={<RequireAuth>
          <Inventory />
        </RequireAuth>} />

        <Route path='/inventory/:inventoryId' element={<RequireAuth>
          <InventoryItem />
        </RequireAuth>} />

        <Route path='/manage-inventory' element={<RequireAuth>
          <ManageInventory />
        </RequireAuth>} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/user-profile' element={<UserProfile />} />


        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer />

      {/* footer  */}
      <Footer />
    </div>
  );
}

export default App;
