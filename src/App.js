// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage/Landingpage';
import AboutUs from './Pages/About/AboutUs';
import Products from './Pages/Product/Product';
import Navigation from './Pages/Nav/Navigation';
import Home from './Pages/Home/Home';
import Pricings from './Pages/Pricing/Pricing';



function App() {

  return (
    <>
      <Routes>
        <Route path='/'element={<Landingpage/>}/>
        <Route path='/Landingpage'element={<Home/>}/>
        <Route path='/AboutUs'element={<AboutUs/>}/>
        <Route path='/Products'element={<Landingpage/>}/>
        <Route path='/Pricing'element={<Landingpage/>}/>
        <Route path='/Pricings'element={<Pricings/>}/>
      </Routes>
    </>
  );
}
export default App;