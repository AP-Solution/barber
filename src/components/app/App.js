import './App.css';
import Main from '../main/Main';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
    })
  })
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
