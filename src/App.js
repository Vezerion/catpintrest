import './css/main.min.css';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Favorite } from './components/Favorite';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCats } from './state/cats-reducer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCats());
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
