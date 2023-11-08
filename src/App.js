// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage/Landingpage';
import AboutUs from './Pages/About/AboutUs';
import Products from './Pages/Product/Product';
import Navigation from './Pages/Nav/Navigation';
import Home from './Pages/Home/Home';



function App() {

  return (
    <>
      <Routes>
        <Route path='/'element={<Landingpage/>}/>
        <Route path='/Landingpage'element={<Landingpage/>}/>
        <Route path='/AboutUs'element={<AboutUs/>}/>
        <Route path='/Products'element={<Landingpage/>}/>
        <Route path='/Pricing'element={<Landingpage/>}/>
      </Routes>
    </>
  );
}
export default App;