import React from 'react';

const UseCallbackButtons = (props) => {
  const { decrement, increment } = props;
  return (
    <div>
      <button
        className="btn"
        onClick={() => decrement(1)}
        type="button"
      >
        -1
      </button>
      <button
        className="btn"
        onClick={() => increment(1)}
        type="button"
      >
        +1
      </button>
    </div>
  );
};
// React memo, coloca o componente no cache, desta forma ele só será renderizado novamente se
// houver alteração nas props
export default React.memo(UseCallbackButtons);
