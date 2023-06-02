import { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Row from './components/Row';

import Summary from './components/Summary';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='app__container'>
        <Result />
        <Summary />
      </div>
      <div className="app__footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/DimiPavlov">Dimi Pavlov</a>.
      </div>
    </div>
  );
}

export default App;
