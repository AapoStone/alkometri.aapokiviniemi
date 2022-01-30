import './App.css';
import {useState} from 'react';

function App() {

const [weight,setWeight] = useState(0);
const [bottles,setBottles] = useState(0);
const [time,setTime] = useState(0);
const [gender,setGender] = useState(0);
const [answer,setAnswer] = useState(0);



  return (
    <from>
    <h1>Calculating alcohol blood level</h1>
    
    <div>
      <label>Weight (kg)</label>

      <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
    </div>

    <div>
      <label>Bottles</label>
      <select>
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
      <select>
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
    <input type="radio" value="male" name="gender" defaultChecked /> Male
    <input type="radio" value="female" name="gender" /> Female
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
