import Modal from 'react-modal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import LoginForm from './components/LoginForm.jsx';
import './index.css';
import MyPortfolio from './pages/portfolio.jsx';
import NotFoundPage from './pages/error404.jsx';

Modal.setAppElement('#root'); // Set the app element for accessibility

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/my-portfolio" element={<MyPortfolio />} />
      <Route path="/error404-page" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;