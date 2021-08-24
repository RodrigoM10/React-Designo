import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  NavbarRB  from './components/navbar/TheNav';
import  Section1  from './components/content/Section-1';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <div>
      <NavbarRB />
      <Container>
        <Section1/>
      </Container>
     
    </div>
  );
}

export default App;
