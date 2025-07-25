import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from  './pages/home';
// import SignIn from './pages/Signin';
import SignIn from './pages/SignIn';
import SignUP from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/' element ={<Home />}/>
      <Route path="/sign-in" element ={<SignIn />}/>
      <Route path="/sign-up" element ={<SignUP />}/>
      <Route path="/about" element ={<About />}/>
      <Route path="/listing/:listingId" element ={<Listing />}/>
      <Route path='/search' element={<Search />} />


      <Route element ={<PrivateRoute/>}>
      <Route path="/profile" element ={<Profile />}/>
      <Route path="/create-listing" element ={<CreateListing />}/>
      </Route>
    <Route path="/update-listing/:listingId" element={<UpdateListing />} />

     </Routes>

     <Footer/>
    </BrowserRouter>
  );
}
