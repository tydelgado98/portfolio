
import './App.css';
import { Nav, Footer, About, Work, Contact } from './componets';
import { useState } from 'react';

const App = () => {
  const [page, setPage] = useState('work');

return <>
  <Nav setPage = {setPage} />

  {
    page==='about' ? <About /> :
    page==='work' ? <Work /> : 
    <Contact />
  }
  
  <Footer />
</>
}

export default App;
