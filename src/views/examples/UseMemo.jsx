import React, { useState, /* useEffect, */ useMemo } from 'react';
import PageTitle from '../../components/layout/PageTitle';

function sum(a, b) {
  const future = Date.now() + 4000;
  while (Date.now < future) {
    // causa um espera de 2s}
  }
  return a + b;
}

const UseMemo = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [numero3, setNumero3] = useState(0);
  // const [result, setResult] = useState(0);

  // simula efeito do useMemo
  /* useEffect(() => {
    setResult(sum(numero1, numero2));
  }, [numero1, numero2]); */

  // useMemo guarda realiza a operação e guarda, só exibindo quando houver mudança nos
  // elementos do segundo parâmetro
  const result = useMemo(() => sum(numero1, numero2), [numero1, numero2]);

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memorizado!"
      />
      <div className="center">
        <input
          type="number"
          className="input"
          value={numero1}
          onChange={(e) => setNumero1(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          className="input"
          value={numero2}
          onChange={(e) => setNumero2(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          className="input"
          value={numero3}
          onChange={(e) => setNumero3(parseInt(e.target.value, 10))}
        />
        <span className="center">{ result }</span>
      </div>
    </div>
  );
};

export default UseMemo;
