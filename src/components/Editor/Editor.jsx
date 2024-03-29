export const Editor = () => {
  const docId = '1l952JQrzvMqHM6uEGMdouwOqrhdxCdjmgO2He59flcs';
  const src = `https://docs.google.com/document/d/${docId}/edit`;

  return (
    <iframe
      src={src}
      style={{
        borderRadius: '10px',
      }}
      width="100%"
      height="100%"
      title="Google Document"
      frameBorder
    ></iframe>
  );
};
