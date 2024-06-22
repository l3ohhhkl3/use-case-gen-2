import React, { useEffect, useState } from 'react';
import api  from './api';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const getMessage = async () => {
      try {
        const data = await fetchHelloMessage();
        setMessage(data.mesg);
      } catch (error) {
        console.error(error);
      }
    };
    getMessage();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
}

export default App;
