import {
  Button,
  IconButton,
  Tab,
  Tabs,
  Grid,
  TextField,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import { Delete, Visibility } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import { Fragment, useState } from 'react';
import EdoModal from './EdoModal.jsx';

const CustomTable = () => {
  const renderHeaders = () => (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Typography variant="subtitle1" style={{ color: 'white' }}>
            Название документа
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1" style={{ color: 'white' }}>
            Категория{' '}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1" style={{ color: 'white' }}>
            Тип документа
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle1" style={{ color: 'white' }}>
            Дата
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Divider
        sx={{
          borderColor: 'white !important',
          border: 1,
          borderStyle: 'solid',
        }}
      />
    </>
  );
  const renderRepeatedInputs = () => {
    return Array.from({ length: 8 }, (_, index) => (
      <Fragment key={index}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              placeholder="Название документа"
              inputProps={{ style: { color: 'white' } }}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              placeholder="Категория пункта"
              inputProps={{ style: { color: 'white' } }}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              placeholder="Название пункта"
              inputProps={{ style: { color: 'white' } }}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              placeholder="27.03.24"
              inputProps={{ style: { color: 'white' } }}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item xs={2}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <IconButton style={{ color: 'white' }}>
                <Visibility />
              </IconButton>
              <IconButton style={{ color: 'white' }}>
                <DownloadIcon />
              </IconButton>
              <IconButton style={{ color: 'white' }}>
                <Delete />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Divider
          sx={{
            borderColor: 'white !important',
            border: 1,
            borderStyle: 'solid',
          }}
        />
      </Fragment>
    ));
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        backgroundColor: '#322A42',
        border: '20px',
        borderRadius: '12px',
        width: '1120px',
        height: '575px',
        marginRight: '100px',
        marginLeft: '-50px',
      }}
    >
      {renderHeaders()}
      <div>{renderRepeatedInputs()}</div>
    </Paper>
  );
};
const LabTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'white',
        },
        '& .MuiTab-root': {
          color: 'white',
        },
        '& .MuiText-selected': {
          Color: 'white',
        },
      }}
    >
      <Tab value="one" label="Покупатели" />
      <Tab value="two" label="Поставщики" />
      <Tab value="three" label="Штат" />
    </Tabs>
  );
};
const DocumentForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        padding: '0px 100px 50px 50px',
        margin: '0 30px',
        backgroundColor: '#261E35',
        width: '1150px',
        height: '661px',
        borderRadius: '10px',
      }}
    >
      <div
        style={{ display: 'flex', marginBottom: '35px', marginLeft: '-55px' }}
      >
        <LabTabs />
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
              padding: '1px 20px',
              marginTop: '10px',
              marginRight: '50px',
              borderRadius: '5px',
              backgroundColor: '#8767C4',
              color: 'white',
            }}
          >
            <span style={{ marginRight: '10px', fontWeight: 'bold' }}>+</span>{' '}
            Создать ЭДО
          </Button>
          <EdoModal open={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
      <CustomTable />
    </div>
  );
};

export default DocumentForm;
