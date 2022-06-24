import './App.css';
import Header from './My Components/Header';
import {Footer}  from './My Components/Footer';
import {Todos}  from './My Components/Todos';

function App() {
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos/>
      <Footer/> 
    </>
  );
}

export default App;
