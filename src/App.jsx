import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './css/general.css'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="">
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

export default App
