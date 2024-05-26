import { useEffect } from 'react';
import useHighlightedText from '../hooks/useHighlightedText';

export const Editor = () => {
  const docId = '1l952JQrzvMqHM6uEGMdouwOqrhdxCdjmgO2He59flcs';
  const src = `https://docs.google.com/document/d/${docId}/view`;
  const word = useHighlightedText();

  useEffect(() => {
    console.log(word);
  }, [word]);

  return (
    <iframe
      src={src}
      style={{
        borderRadius: '15px',
      }}
      width="100%"
      height="100%"
      title="Google Document"
      frameBorder
    ></iframe>
  );
};
