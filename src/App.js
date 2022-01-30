import './App.css';
import {useState} from 'react';

function App() {

const [weight,setWeight] = useState(0);
const [bottles,setBottles] = useState(0);
const [time,setTime] = useState(0);
const [gender,setGender] = useState(0);
const [answer,setAnswer] = useState(0);


  function calculate(e){
  e.preventDefault();

  let litres = bottles * 0.33;
  let grams =  litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams - (burning * time);
  let answer = 0;

  if (gender === 'male') {
    answer = grams / (weight * 0.7);
  }
  else {
    answer = grams / (weight * 0.6);
  }
  setAnswer(answer);


  }


  return (
    <form onSubmit={calculate}>
    <h1>Calculating alcohol blood level</h1>
    
    <div>
      <label>Weight (kg)</label>

      <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
    </div>

    <div>
      <label>Bottles</label>
      <select onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
      
    </div>

    <div>
      <label>Time (h)</label>
      <select onChange={e => setTime(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
    </div>

    <div>
    <label>Gender</label>
    <input type="radio" value="male" name="gender" defaultChecked onChange={e => setGender(e.target.value)}/> Male
    <input type="radio" value="female" name="gender" onChange={e => setGender(e.target.value)}/> Female
    </div>
    <div className='answer'>
      <label>Answer</label>
      <output>{answer.toFixed(2)} </output>
    </div>
    <div className='button'>
    <button>Calculate</button>
    </div>
    </form>





  );
}

export default App;
