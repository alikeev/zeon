import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import { News } from './page/News/News'
import { About } from './page/About/About'
import "./app.css"
import Collegtion from './page/Collegtion/Collegtion';
import { Product } from './components/product/Product.jsx';
import Korzina from './components/Home/Korzina/Korzina';
import Favorit from './components/Home/favorit/Favorit';
import { CollecPage } from './page/Collegtion/collection_page/collecPage';
import { store } from './redux';
import { Helppage } from './page/Helppage/Helppage';
import "antd/dist/antd.css";
import ResultPage from './components/Search/ResultPage';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/News" element={<News />} />
        <Route path="/Collegtion" element={<Collegtion />} />
        <Route path='/:category/:id' element={<Product />} />
        <Route path='/Korzina' element={<Korzina />} />
        <Route path='/Favorit' element={<Favorit />} />
        <Route path='/CollecPage/:category/:id' element={<CollecPage />} />
        <Route path='/Helppage' element={<Helppage />} />
        <Route path='/result/:name' element={<ResultPage />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
