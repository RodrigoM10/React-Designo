import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  NavbarRB  from './components/navbar/TheNav';
import  Section1  from './components/content1/Section-1';
import  Section2  from './components/content2/Section-2';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <div>
      <NavbarRB />
      <Container>
        <Section1/>
        <Section2/>
      </Container>
    </div>
  );
}

export default App;
