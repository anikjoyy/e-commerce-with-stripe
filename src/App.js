import './App.scss';
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
      <Footer />
    </div>
  );
}

export default App;
