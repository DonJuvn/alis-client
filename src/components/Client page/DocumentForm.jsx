import { Button, TextField, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';

const DocumentForm = () => {
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveTab(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleTabChange = tab => {
    setActiveTab(prevTab => (prevTab === tab ? prevTab : tab));
  };

  return (
    <div
      style={{
        padding: '10px 100px 50px 100px',
        margin: '0 30px',
        backgroundColor: 'white',
        width: '1150px',
        height: '665px',
        borderRadius: '10px',
      }}
    >
      <div
        style={{ display: 'flex', marginBottom: '35px', marginLeft: '-55px' }}
      >
        {['покупатели', 'поставщики', 'штат'].map(tab => (
          <Button
            key={tab}
            onClick={() => handleTabChange(tab)}
            onFocus={() => setActiveTab(tab)}
            style={{
              fontSize: '14px',
              padding: '8px 16px',
              marginRight: '10px',
              marginTop: '30px',
              borderRadius: '10px',
              backgroundColor: activeTab === tab ? '#323DA7' : 'white',
              color: activeTab === tab ? 'white' : '#040101',
              '&:hover': {
                backgroundColor: '#323DA7',
                color: 'white',
              },
              '&:focus': {
                backgroundColor: '#323DA7',
                color: 'white',
              },
            }}
          >
            {tab}
          </Button>
        ))}
        <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
          <Button
            onClick={() => {}}
            style={{
              display: 'flex',
              width: '150px',
              height: '40px',
              fontSize: '10px',
              padding: '1px 20px  ',
              marginTop: '10px',
              marginRight: '50px',
              borderRadius: '10px',
              backgroundColor: '#323DA7',
              color: 'white',
              '&:hover': {
                backgroundColor: '#2e2e9b',
                color: 'white',
              },
              '&:focus': {
                backgroundColor: '#2e2e9b',
                color: 'white',
              },
            }}
          >
            <span style={{ marginRight: '10px', text: 'bold' }}>+</span> Создать
            ЭДО
          </Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {[1, 2, 3, 4].map(index => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '-55px',
            }}
          >
            <TextField
              label="Название документа"
              variant="outlined"
              size="small"
              style={{ width: '45%' }}
              InputProps={{ className: 'h-28 text-center text-black' }}
              InputLabelProps={{ className: 'text-black' }}
            />
            <TextField
              label="Категория"
              variant="outlined"
              size="small"
              style={{ width: '45%' }}
              InputProps={{ className: 'h-28 text-center text-black' }}
              InputLabelProps={{ className: 'text-black' }}
            />
            <TextField
              label="Тип документа"
              variant="outlined"
              size="small"
              style={{ width: '45%', textAlign: 'center', justify: 'center' }}
              InputProps={{ className: 'h-28 text-center text-black' }}
              InputLabelProps={{
                className: 'text-black ',
                style: { textAlign: 'center' },
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '25px',
                border: '1px solid',
                width: '400px',
                height: '110px',
                justifyContent: 'center',
                marginRight: '-80px',
                borderRadius: '3px',
              }}
            >
              {' '}
              <IconButton>
                <Visibility />
              </IconButton>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentForm;
