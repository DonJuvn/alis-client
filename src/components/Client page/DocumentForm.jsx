import { Button, OutlinedInput, IconButton } from '@mui/material';
import { Delete, Visibility } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import { useState, useRef, useEffect } from 'react';
import EdoModal from './EdoModal.jsx';
function DocumentForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    setActiveTab(tab);
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
        <div
          style={{
            marginLeft: 'auto',
            marginRight: '-120px',
            marginTop: 'auto',
          }}
        >
          <Button
            onClick={handleOpenModal}
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
          <EdoModal open={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {[1, 2, 3, 4].map(index => (
          <div
            key={index}
            style={{
              display: 'flex',
              marginLeft: '-55px',
            }}
          >
            <OutlinedInput
              placeholder="          Название документа"
              size="small"
              style={{ width: '45%' }}
              InputProps={{ className: 'h-28 text-center text-black' }}
              InputLabelProps={{
                style: { color: 'black', textAlign: 'center' },
              }}
            />
            <OutlinedInput
              placeholder="     Категория:Название пункта "
              size="small"
              style={{ width: '45%' }}
              InputProps={{ className: 'h-28 text-center text-black' }}
              InputLabelProps={{ className: 'text-black' }}
            />
            <OutlinedInput
              placeholder=" Тип документа:Название пункта "
              size="small"
              style={{ width: '45%' }}
              InputProps={{ className: 'h-28 text-center text-black' }}
              InputLabelProps={{ className: 'text-black' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '25px',
                border: '2px solid lightgrey',
                color: 'gray',
                width: '400px',
                height: '111px',
                justifyContent: 'center',
                marginRight: '-80px',
                borderRadius: '5px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid black',
                    backgroundColor: 'white',
                    margin: '0 5px',
                    borderRadius: '5px',
                  }}
                >
                  <IconButton style={{ color: '#323DA7' }}>
                    <Visibility />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid black',
                    backgroundColor: '#323DA7',
                    margin: '0 5px',
                    borderRadius: '5px',
                  }}
                >
                  <IconButton style={{ color: 'white' }}>
                    <DownloadIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid black',
                    backgroundColor: '#900E16',
                    margin: '0 5px',
                    borderRadius: '5px',
                  }}
                >
                  <IconButton style={{ color: 'white' }}>
                    <Delete />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentForm;
