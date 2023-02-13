import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetails/ProductDetail';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ServiceDetails from './components/serviceDetails/ServiceDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <React.StrictMode>
      
      <BrowserRouter> 
              <NavBar />
              <Routes>
                <Route index path="/" element={ <App />} />
                <Route exact path="/productDetail" element={<ProductDetail />} />
                <Route exact path="/serviceDetail" element={<ServiceDetails />} />
              </Routes>
              <Footer />
      </BrowserRouter>

  </React.StrictMode>
</div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
