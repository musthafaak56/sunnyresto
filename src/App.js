
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allrestaurants from './components/Allrestaurants/Allrestaurants';
import ViewRestaurant from './components/ViewRestaurant';
import Footer from './components/footer/footer';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>

        <section className="section1">
          <Routes>
            {/* <Route path='/' element={<Allrestaurants/>}></Route> */}
            <Route path='/' element={<Allrestaurants/>}/>
            <Route path='/view/:id' element={<ViewRestaurant/>}/>
          </Routes>
        </section>


      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
