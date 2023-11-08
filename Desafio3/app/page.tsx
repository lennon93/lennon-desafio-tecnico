"use client"

import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [salary, setSalary] = useState(0.00);
  const [value, setValue] = useState(0.00);
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidYears, setInvalidYears] = useState(false);
  const [invalidValue, setInvalidValue] = useState(false);
  const [valueWrong, setValueWrong] = useState(false);
  const [options, setOptions] = useState<{
    maior: { name: string; value: number }[];
    meio: { name: string; value: number }[];
    menor: { name: string; value: number }[];
  }>({
    maior: [],
    meio: [],
    menor: [],
  });

  const disable = invalidDate || invalidValue || invalidYears || valueWrong;

  const isValidDate = (date: string) => {
    const regex = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;
    return regex.test(date);
  };
  
  
  const requirements = () => {
    const dateNow = new Date();
      const dateAdm = new Date(date);

      const diff = dateNow.getTime() - dateAdm.getTime();
      const years = diff / 31536000000;
      // valor da quantidade de milissegundos em um ano.

    if (Math.floor(years) <= 5) {
      setInvalidYears(true);
    }
    if (value % 2 !== 0) {
      setInvalidValue(true);
    }
    if (value > salary * 2) {
      setValueWrong(true);
    }
    
    if(!isValidDate(date)) setInvalidDate(true);

  };



  const calcMaxValue = (amount: number): { name: string; value: number }[] => {
    return [
      { name: '100', value: Math.floor(amount / 100) },
      { name: '50', value: Math.floor((amount % 100) / 50) },
      { name: '20', value: Math.floor((amount % 50) / 20) },
      { name: '10', value: Math.floor((amount % 20) / 10) },
      { name: '5', value: Math.floor((amount % 10) / 5) },
      { name: '2', value: Math.floor((amount % 5) / 2) },
    ];
  };

  const calcMinValue = (amount: number): { name: string; value: number }[] => {
    return [
      { name: '20', value: Math.floor(amount / 20) },
      { name: '10', value: Math.floor((amount % 20) / 10) },
      { name: '5', value: Math.floor((amount % 10) / 5) },
      { name: '2', value: Math.floor((amount % 5) / 2) },
    ];
  };

  const handleClick = () => {
    requirements();

    const mid = value / 2;

    setOptions({
      maior: calcMaxValue(value),
      meio: [...calcMaxValue(mid), ...calcMinValue(mid)],
      menor: calcMinValue(value),
    });
  };

  return (
    <main className="flex flex-col items-center space-y-4">
  <div className="flex flex-col items-center">
    <label htmlFor="name">Insira seu nome:</label>
    <input
      type="text"
      id="name"
      className="border p-2"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="flex flex-col items-center">
    <label htmlFor="years">Insira sua Data de Admissão:</label>
    <input
      type="text"
      id="years"
      placeholder="2000-11-30"
      className="border p-2"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  </div>
  <div className="flex flex-col items-center">
    <label htmlFor="salary">Insira seu salário:</label>
    <input
      type="number"
      id="salary"
      className="border p-2"
      value={salary}
      onChange={(e) => setSalary(Number(e.target.value))}
    />
  </div>
  <div className="flex flex-col items-center">
    <label htmlFor="value">Insira um valor de empréstimo múltiplo de dois:</label>
    <input
      type="number"
      id="value"
      className="border p-2"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  </div>
  <button
    type="button"
    className="bg-blue-500 text-white p-2 rounded"
    onClick={handleClick}
  >
    Enviar
  </button>
  {invalidYears && (
    <span className="text-red-500">Agradecemos seu interesse, mas você não atende os requisitos mínimos do programa.</span>
  )}
  {invalidValue && <span className="text-red-500">Insira um valor válido!</span>}
  {valueWrong && <span className="text-red-500">Valor acima do dobro do salário!</span>}
  {invalidDate && <span className="text-red-500">Data inválida!</span>}
 <div className="flex flex-col items-center">
    <h1>Notas de maior valor:</h1>
    <ul>
      {options.maior
        .filter((note) => note.value !== 0)
        .map((note, noteIndex) => (
          <li key={noteIndex}>
            {note.value} x {note.name} reais;
          </li>
        ))}
    </ul>
  </div>
  <div className="flex flex-col items-center">
    <h1>Notas meio a meio:</h1>
    <ul>
      {options.meio
        .filter((note) => note.value !== 0)
        .map((note, noteIndex) => (
          <li key={noteIndex}>
            {note.value} x {note.name} reais;
          </li>
        ))}
    </ul>
  </div>
  <div className="flex flex-col items-center">
    <h1>Notas de menor valor:</h1>
    <ul>
      {options.menor
        .filter((note) => note.value !== 0)
        .map((note, noteIndex) => (
          <li key={noteIndex}>
            {note.value} x {note.name} reais;
          </li>
        ))}
    </ul>
  </div>
</main>
  );
}

