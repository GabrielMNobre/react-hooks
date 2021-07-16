import { useEffect, useState } from 'react';

// = no parâmetro, representa valor default caso nada seja enviado
function useFetch(url, method = 'get') {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    fetch(url, { method })
      .then((result) => result.json())
      .then((json) => setResponse({
        data: json,
        loading: false,
      }));
  }, [url, method]);

  return response;
}

export default useFetch;
