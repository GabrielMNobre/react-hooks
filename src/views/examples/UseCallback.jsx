import React, { useState, useCallback } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // com useCallback a função só é criada uma única vez evitando renderização no componente filho
  // passando o setCount como parâmetro, mostra que só vai mudar quando setCount mudar e
  // ele é imutável
  const increment = useCallback((delta) => {
    setCount((current) => current + delta);
  }, [setCount]);

  const decrement = useCallback((delta) => {
    setCount((current) => current - delta);
  }, [setCount]);

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memorizada!"
      />
      <div className="center">
        <span className="text">{ count }</span>
        <UseCallbackButtons
          increment={increment}
          decrement={decrement}
        />
      </div>
    </div>
  );
};

export default UseCallback;
