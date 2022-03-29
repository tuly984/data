import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import {Home} from './Component/Home';
import {Blog} from './Component/Blog';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Demo</h1>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
<div>
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
  </Routes>
</div>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
