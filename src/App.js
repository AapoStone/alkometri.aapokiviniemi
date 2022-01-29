import './App.css';
import React, {useState} from 'react';

function App() {

const [weight,setWeight] = useState(0);
const [bottles,setBottles] = useState(0);
const [time,setTime] = useState(0);





  return (
    <from>
    <h1>Calculating alcohol blood level</h1>
    
    <div>
      <label>Weight</label>

      <input 
      type="number"
      value="" 
      />
    </div>

    <div>
      <label>Bottles</label>
      
      <input 
      type="number"
      value="" 
      />
    </div>

    <div>
      <label>Time</label>
      
      <input 
      type="number"
      value="" 
      />
    </div>

    <div>
    <label>Gender</label>
    <input type="radio" value="Male" name="gender" /> Male
    <input type="radio" value="Female" name="gender" /> Female
    </div>
    <div className='answer'>
      <label>Answer</label>
      <output> </output>
    </div>
    <div className='button'>
    <button>Calculate</button>
    </div>
    </from>





  );
}

export default App;
