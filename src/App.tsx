import { useCallback, useEffect } from 'react';
import './App.css';

const App = () => {
  const request = useCallback(async () => {
    const res = await fetch('https://example.com/user')
    console.log('res', res);
  }, [])

  useEffect(() => {
    (async () => {
      await request()
    })()
  }, [request])

  return (
    <div className="content">
      <h1>I am MF Sub App</h1>
      <a href="/">back to home</a>
    </div>
  );
};

export default App;
