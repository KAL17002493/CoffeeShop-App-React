import './App.css';

//import components
import Header from './Components/Header'

//import screens
import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/MenuScreen';
import GalleryScreen from './Screens/GalleryScreen';
import HistoryScreen from './Screens/HistoryScreen';
import ContactScreen from './Screens/ContactScreen';
import ReviewsScreen from './Screens/ReviewsScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import OrderScreen from './Screens/OrderScreen';

import AccountScreen from './Screens/AccountScreen';
import ManageAccount from './Screens/ManageAccount';

import AdminScreen from './Screens/AdminScreen';
import ViewUsersScreen from './Screens/ViewUsersScreen';
import ViewProductsScreen from './Screens/ViewProductsScreen';
import AddProductScreen from './Screens/AddProductScreen';

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
            <Route exact path="/checkOut" element={<OrderScreen/>}/>

            <Route exact path="/user/account" element={<AccountScreen/>}/>
            <Route exact path="/user/account/manage" element={<ManageAccount/>}/>

            <Route exact path="/user/admin" element={<AdminScreen/>}/>
            <Route exact path="/user/admin/viewUsers" element={<ViewUsersScreen/>}/>
            <Route exact path="/user/admin/viewProducts" element={<ViewProductsScreen/>}/>
            <Route exact path="/user/admin/viewProducts/addProduct" element={<AddProductScreen/>}/>

          </Routes>

      </Router>

    </div>
  );
}

export default App;
