import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
