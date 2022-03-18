import './App.css';

//import components
import Header from './Components/Header'
import Footer from './Components/Footer'

//import screens
import HomeScreen from './Screens/HomeScreen';

//import routing for page navigation
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>

      <Router>
        <Header/>
          <Routes>

            <Route exact path="/" element={<HomeScreen/>}/>
            
          </Routes>

      </Router>

    </div>
  );
}

export default App;
