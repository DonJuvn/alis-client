import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Select,
  MenuItem,
  OutlinedInput,
  Button,
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const WhiteArrowDropDownIcon = () => (
  <ArrowDropDownIcon style={{ color: 'white' }} />
);
const style = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '530px',
  height: '700px',
  borderRadius: '12px',
  backgroundColor: '#322B42',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  boxShadow: '0 0 24px rgba(0, 0, 0, 0.5)',
  padding: '25px 20px 0 20px',
};

// eslint-disable-next-line react/prop-types
function EdoModal({ open, onClose }) {
  const [organization, setOrganization] = React.useState('');

  const handleOrganizationChange = event => {
    setOrganization(event.target.value);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography
          variant="h4"
          sx={{ color: 'white', marginBottom: '10px' }}
          component="h2"
          gutterBottom
        >
          Создание Документа
        </Typography>
        <Typography variant="subtitle3" style={{ color: 'white' }} gutterBottom>
          Откроется форма для ввода новых данных. Заполните все необходимые
          поля, обратив внимание на обязательные для заполнения поля
        </Typography>
        <h2 style={{ color: 'white', paddingTop: '15px' }}>
          Название организации
        </h2>
        <Select
          value={organization}
          onChange={handleOrganizationChange}
          displayEmpty
          fullWidth
          IconComponent={WhiteArrowDropDownIcon}
          sx={{
            mt: 1,
            borderRadius: '10px',
            color: 'white',
            maxHeight: '50px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          }}
        >
          <MenuItem value="" disabled>
            Организация
          </MenuItem>
          {/* Здесь должны быть элементы для выбора, например: */}
          <MenuItem value={'Организация 1'}>Организация 1</MenuItem>
          <MenuItem value={'Организация 2'}>Организация 2</MenuItem>
          {/* ...другие организации... */}
        </Select>
        <h2 style={{ color: 'white', paddingTop: '15px' }}>Имя сотрудника</h2>
        <OutlinedInput
          placeholder="Имя сотрудника"
          style={{ color: 'white' }}
          fullWidth
          sx={{
            mt: 1,
            borderRadius: '10px',
            maxHeight: '50px',
            color: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          }}
        />
        <h2 style={{ color: 'white', paddingTop: '15px' }}>
          Название должности
        </h2>
        <OutlinedInput
          placeholder="Напишите данные"
          style={{ color: 'white' }}
          fullWidth
          sx={{
            mt: 1,
            borderRadius: '10px',
            maxHeight: '50px',
            color: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 25,
            left: '10%',
            transform: 'translateX(-50%)',
            right: '-400px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="contained"
            sx={{
              mr: '25px',
              backgroundColor: '#8767C4',
              color: 'white',
              width: '300px',
              height: '40px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#8767C4',
                '@media (hover: none)': {
                  backgroundColor: '#8767C4',
                },
              },
            }}
          >
            Сохранить
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: 'none',
              width: '120px',
              height: '40px',
              borderRadius: '8px',
              color: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'rgba(255, 255, 255, 0.7)',
              '&:hover': {
                backgroundColor: 'none',
                borderColor: 'rgba(255, 255, 255, 0.7)',
                color: 'rgba(255, 255, 255, 0.7)',
                '@media (hover: none)': {
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              },
            }}
            onClick={onClose}
          >
            Назад
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default EdoModal;
