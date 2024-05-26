import { useState, useEffect } from 'react';

// get a text from the clipboard
const getClipboardText = () => {
  return new Promise((resolve, reject) => {
    navigator.clipboard
      .readText()

      .then(text => {
        resolve(text);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const useCopyBuffer = () => {
  const [clipboardText, setClipboardText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      getClipboardText().then(text => {
        setClipboardText(text);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return clipboardText;
};

export default useCopyBuffer;
