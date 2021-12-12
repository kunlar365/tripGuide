import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import { Suspense, useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelList from "./pages/HotelList";
import Footer from "./components/Footer";
import HotelDetailes from "./pages/HotelDetailes";
import HotelPayment from "./pages/HotelPayment";
import HotelCongrutulations from "./pages/HotelCongrutulations";
import NotFound from "./pages/NotFound"

const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
            <Suspense fallback="loading">
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hotellist' element={<HotelList />} />
                <Route path='/hoteldetailes/:id' element={<HotelDetailes/>} />
                <Route path='/hotelpayment' element={<HotelPayment/>} />
                <Route path='/hotelcongrutulations' element={<HotelCongrutulations/>} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <Footer/>
              {/* <Routes>
              <Route path='/hotellist' element={<HotelList/>}/>
            </Routes> */}
            </Suspense>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>

  );
}

export default App;
