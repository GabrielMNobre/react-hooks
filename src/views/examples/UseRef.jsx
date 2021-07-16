import React, { useState, useRef, useEffect } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (s1, s2) => (
  // [...string] tranforma a string em um array, com cada letra em uma posição
  [...s1].map((e, i) => `${e}${s2[i] || ''}`).join('')
);
const UseRef = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);
  // alteração no valor de ref, não causa nova renderização

  useEffect(() => {
    // contar quantas vezes o componente foi renderizado
    count.current += 1;
    myInput2.current.focus();
  }, [value1]);

  useEffect(() => {
    // contar quantas vezes o componente foi renderizado
    count.current += 1;
    myInput1.current.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle
        title="Exercício #01 - Contador de todas as letras digitadas nos dois inputs"
      />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">
            { merge(value1, value2) }
            {' '}
            [
          </span>
          <span className="text red">{ count.current }</span>
          <span className="text">]</span>
        </div>

        <input
          type="text"
          className="input"
          ref={myInput1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle
        title="Exercício #02 - Mesclando texto digitado nos inputs"
      />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInput2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
