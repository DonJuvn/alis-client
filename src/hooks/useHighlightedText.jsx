import { useState, useEffect } from 'react';

const useHighlightedText = () => {
  const [highlightedText, setHighlightedText] = useState(
    'highlighted text will be shown here!',
  );
  useEffect(() => {
    const saveSelection = () => {
      setHighlightedText(window.getSelection().toString());
    };
    document.addEventListener('mouseup', saveSelection);
    return () => document.removeEventListener('mouseup', saveSelection);
  }, []);

  return highlightedText;
};

export default useHighlightedText;
