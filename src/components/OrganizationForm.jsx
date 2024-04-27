import {
  Button,
  Box,
  OutlinedInput,
  Typography,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Visibility } from '@mui/icons-material';

import { Editor } from './Editor.jsx';

const WhiteArrowDropDownIcon = () => (
  <ArrowDropDownIcon style={{ color: 'white' }} />
);
export default function OrganizationForm() {
  const dashedBorderStyle = {
    border: '1px solid white',
    padding: '16px',
  };

  return (
    <Box
      style={{
        maxWidth: '1460px',
        minHeight: '661px',
        backgroundColor: '#322A42',
        margin: 'auto',
        borderRadius: '10px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 10px',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontStyle: 'normal',
          color: 'white',
          whiteSpace: 'nowrap',
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '8px',
          marginLeft: '40px',
        }}
      >
        Создание документа
      </Typography>
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          paddingRight: '15px',
        }}
        onClick={() => {}}
      >
        ✖
      </button>

      <hr />

      <Box
        style={{
          padding: '1px',
          width: '790px',
          height: '550px',
          marginTop: '10px',
          marginLeft: '40px',
        }}
      >
        <Editor />
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="job-title-label" style={{ color: 'white' }}>
            Тип документа
          </InputLabel>
          <Select
            labelId="job-title-label"
            id="job-title"
            style={{ color: 'white' }}
            IconComponent={WhiteArrowDropDownIcon}
            sx={{
              mt: '2px',
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
            {/* Здесь должны быть элементы MenuItem */}
          </Select>
        </FormControl>
      </Box>

      <Box
        style={{
          ...dashedBorderStyle,
          width: '500px',
          height: '600px',
          borderRadius: '15px',
          paddingRight: '20px',
          marginLeft: '900px',
          marginTop: '-550px',
          paddingTop: '10px',
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ fontWeight: 'bold', marginLeft: '5px', color: 'white' }}
        >
          Название организации
        </Typography>
        <OutlinedInput
          placeholder="Введите данные"
          size="small"
          style={{
            width: '100%',
            marginBottom: '10px',
            color: 'white',
            borderColor: 'white',
          }}
          InputProps={{ className: 'h-28 text-white' }}
          sx={{
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
        <OutlinedInput
          placeholder="Текстовое поле"
          size="small"
          style={{ width: '100%', marginBottom: '10px', color: 'white' }}
          InputProps={{ className: 'h-28 text-white' }}
          sx={{
            borderRadius: '10px',
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
        <OutlinedInput
          placeholder="Организация"
          size="small"
          style={{ width: '100%', marginBottom: '10px', color: 'white' }}
          inputProps={{
            className: 'h-28 text-white',
          }}
          sx={{
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
        <OutlinedInput
          placeholder="Контрагент"
          size="small"
          style={{ width: '100%', marginBottom: '10px', color: 'white' }}
          inputProps={{
            className: 'h-28 text-white',
          }}
          sx={{
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
        <OutlinedInput
          placeholder="Документ"
          size="small"
          style={{ width: '100%', marginBottom: '10px', color: 'white' }}
          inputProps={{
            className: 'h-28 text-white',
          }}
          sx={{
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
        <OutlinedInput
          placeholder="Сотрудник"
          size="small"
          style={{ width: '100%', marginBottom: '10px', color: 'white' }}
          inputProps={{
            className: 'h-28 text-white',
          }}
          sx={{
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
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            fontWeight: 'bold',
            marginLeft: '5px',
            marginBottom: '1px',
            color: 'white',
          }}
        >
          Имя сотрудника
        </Typography>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="job-title-label" style={{ color: 'white' }}>
            Введите данные
          </InputLabel>
          <Select
            labelId="job-title-label"
            id="job-title"
            style={{ color: 'white' }}
            IconComponent={WhiteArrowDropDownIcon}
            sx={{
              mt: '5px',
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
            {/* Здесь должны быть элементы MenuItem */}
          </Select>
        </FormControl>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            fontWeight: 'bold',
            marginLeft: '5px',
            marginBottom: '1px',
            color: 'white',
          }}
        >
          Название должности
        </Typography>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="job-title-label" style={{ color: 'white' }}>
            Введите данные
          </InputLabel>
          <Select
            labelId="job-title-label"
            id="job-title"
            style={{ color: 'white' }}
            IconComponent={WhiteArrowDropDownIcon}
            sx={{
              mt: '5px',
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
            {/* Здесь должны быть элементы MenuItem */}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          style={{
            height: '40px',
            width: '410px',
            backgroundColor: '#8767C4',
            borderRadius: '8px',
            marginTop: '25px',
            marginRight: '1px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          Сформировать
          <Box
            style={{
              width: '40px',
              height: '40px',
              position: 'absolute',
              right: '-50px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid white',
              borderRadius: '8px',
            }}
          >
            {' '}
            <IconButton style={{ color: 'white' }}>
              <Visibility />
            </IconButton>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
