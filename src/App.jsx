import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import { useState } from 'react';


function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)
  const [interest,setInterest]=useState(0)

  const calculate=e=>{
    const output = amount*year*rate/100;
    setInterest(output)
  }
  const reset=e=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)
  }


console.log(amount,year,rate)
  return (
    <div className="App">
      <div className="container">
        <h1>Simple Interest calculator</h1>
        <p>calculate your simple interest with us</p>
      <div className="total">
        <h1>&#8377;{interest}</h1>
        <p>Your total Interest</p>
      </div>
      <div className="input">
        <form action="">
              <TextField id="outlined-basic" label="Amount" value={amount || ""} variant="outlined" onChange={(e)=>setAmount(e.target.value)} />
              <TextField id="filled-basic" label="Year"  value={year || ""}  variant="filled" onChange={(e)=>setYear(e.target.value)} />
             <TextField id="standard-basic" label="Rate of Interest"  value={rate || ""}  variant="standard" onChange={(e)=>setRate(e.target.value)} />
        </form>
      </div>
      <div className="buttons">
         <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
       <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
      </div>
    </div>
    </div>
  );
}

export default App;
