import logo from './logo.svg';
import './App.css';
import Header from './My Components/Header';
import {Footer}  from './My Components/Footer';
import {Todos}  from './My Components/Todos';

function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <Footer/> 
    </>
  );
}

export default App;
