import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import PDFViewer from './pages/PDFViewer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PDFViewer />
    </div>
  );
}

export default App;
