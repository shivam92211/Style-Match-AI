'use client'

import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [caption, setCaption] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaption = async () => {
      try {
        const response = await fetch('https://fashion-8u2l5myq7-shivam92211s-projects.vercel.app/color-suggestion/', {
          method: 'POST', // or 'GET' depending on your FastAPI method
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Add any data if required by the API
          }),
        });

        if (!response.ok) {
          throw new Error('API response not ok');
        }

        const data = await response.json();
        setCaption(data.caption); // assuming 'caption' is the key in the response
      } catch (error: unknown) {
        // Use a type check to narrow down the type of `error`
        if (error instanceof Error) {
          setError(error.message); // TypeScript now knows `error` is an instance of `Error`
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchCaption();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{caption ? `Generated Caption: ${caption}` : 'Loading...'}</div>;
};

export default YourComponent;
