import React from 'react';
import {
  Modal,
  Box,
  Typography,
  OutlinedInput,
  MenuItem,
  Select,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';
EdoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 750,
  height: 500,
  transform: 'translate(-50%, -50%)',
  borderRadius: 5,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EdoModal({ open, onClose }) {
  // Допустим, у вас есть состояние для хранения выбранной организации
  const [organization, setOrganization] = React.useState('');

  const handleOrganizationChange = event => {
    setOrganization(event.target.value);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="subtitle1" gutterBottom>
          Название организации
        </Typography>
        <Select
          value={organization}
          onChange={handleOrganizationChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          fullWidth
        >
          <MenuItem value="" disabled>
            Организация
          </MenuItem>
          {/* Здесь должны быть элементы для выбора, например: */}
          <MenuItem value={'Организация 1'}>Организация 1</MenuItem>
          <MenuItem value={'Организация 2'}>Организация 2</MenuItem>
          {/* ...другие организации... */}
        </Select>

        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ marginTop: '20px' }}
        >
          Имя сотрудника
        </Typography>
        <OutlinedInput placeholder="Напишите данные" fullWidth />

        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ marginTop: '20px' }}
        >
          Название должности
        </Typography>
        <OutlinedInput placeholder="Напишите данные" fullWidth />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            width: '92%',
            textAlign: 'center',
          }}
        >
          <Button
            onClick={onClose}
            style={{
              marginTop: '20px',
              backgroundColor: '#323DA7',
              color: 'white',
              width: 'calc(100% - 1px)',
              height: '50px',
              borderRadius: '10px',
            }}
          >
            Сохранить
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default EdoModal;
