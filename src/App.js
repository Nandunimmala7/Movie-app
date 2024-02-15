import './App.scss'
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './component/Home/Home';
import MovieDetail from './component/MovieDetail/MovieDetail';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';


function App() {
  return(
    <div className='App'>
    <Router>
      <Header></Header>
      <div className='container'>
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/movie/:imdbID' Component={MovieDetail} />
      <Route Component={PageNotFound} />
      </Routes>
      </div>
      <Footer />
    </Router>
    
    </div>
  )

}

export default App;
