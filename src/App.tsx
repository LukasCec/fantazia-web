import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import DeliveryPage from './pages/DeliveryPage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function HomePage() {
  return (
    <>
      <Navbar activePage="home" />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donaska" element={<DeliveryPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
