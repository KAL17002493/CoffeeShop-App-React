import './App.css';

//import components
import Header from './Components/Header'
import Footer from './Components/Footer'

//import screens
import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/MenuScreen';
import GalleryScreen from './Screens/GalleryScreen';
import HistoryScreen from './Screens/HistoryScreen';
import ContactScreen from './Screens/ContactScreen';
import ReviewsScreen from './Screens/ReviewsScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

import AccountScreen from './Screens/AccountScreen';
import ManageAccount from './Screens/ManageAccount';

import AdminScreen from './Screens/AdminScreen';

//import routing for page navigation
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>

      <Router>
        <Header/>
          <Routes>

            <Route exact path="/home" element={<HomeScreen/>}/>
            <Route exact path="/menu" element={<MenuScreen/>}/>

            <Route exact path="/gallery" element={<GalleryScreen/>}/>
            <Route exact path="/history" element={<HistoryScreen/>}/>
            <Route exact path="/contact" element={<ContactScreen/>}/>
            <Route exact path="/reviews" element={<ReviewsScreen/>}/>
            <Route exact path="/login" element={<LoginScreen/>}/>
            <Route exact path="/register" element={<RegisterScreen/>}/>

            <Route exact path="/user/account" element={<AccountScreen/>}/>
            <Route exact path="/user/account/manage" element={<ManageAccount/>}/>

            <Route exact path="/user/admin" element={<AdminScreen/>}/>
          </Routes>

      </Router>

    </div>
  );
}

export default App;
