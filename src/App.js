import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';




const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
)

export default App;
