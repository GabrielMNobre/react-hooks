import React from 'react';

// cria volume com as informações
export const data = {
  number: 2410,
  text: 'Context API...',
};

// cria o objeto de contexto e passa os valores iniciais
const DataContext = React.createContext(data);

export default DataContext;
