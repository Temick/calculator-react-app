import { useState } from 'react';
import './App.css';
import { InputNumber } from './components/InputNumber';
import { Operations } from './components/Operations';
import { Result } from './components/Result';

function App() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operation, setOperation] = useState('')

  return (
    <div className="App-header">
      <h3>Введите числа над которыми хотите провести операцию</h3>
      <InputNumber number={number1} func={setNumber1}/>
      <InputNumber number={number2} func={setNumber2}/>
      <h3>Выберете операцию которую хотите провести над числами</h3>
      <Operations func={setOperation}/>
      <h3>Нажмите, чтобы получить результат</h3>
      <Result num1={number1} num2={number2} oper={operation}/>
    </div>
  );
}

export default App;
