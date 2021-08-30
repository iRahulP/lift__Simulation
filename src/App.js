import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput';
import Lift from './components/Lift';

function App() {

  const [ step, setStep ] = useState(1);
  
  const nextStep = () => {
    setStep(step + 1);
  }

  const handleChange = (input) => (e) => {
    setStep(e.target.value);
  }

  switch(step) {
    case 1:
      return (
        <UserInput 
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <Lift 
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    default:
      return (
        <div>
          <h1>DONE</h1>
        </div>
      ) 
  }
}

export default App;
