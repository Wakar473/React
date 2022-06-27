
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home/>
     <Footer />
    </div>
  );
}

export default App;
