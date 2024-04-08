import { Button, Select, FormControl, InputLabel, Box } from '@mui/material';

export default function OrganizationForm() {
  const dashedBorderStyle = {
    border: '2px dashed black',
    padding: '16px',
  };

  const formControlStyle = {
    margin: '8px',
    minWidth: '120px',
  };

  const buttonStyle = {
    margin: '8px',
  };

  return (
    <Box style={dashedBorderStyle}>
      <FormControl fullWidth style={formControlStyle}>
        <InputLabel id="organization-name-label">
          Название организации
        </InputLabel>
        <Select labelId="organization-name-label" id="organization-name">
          {/* Здесь должны быть элементы MenuItem */}
        </Select>
      </FormControl>
      {/* Другие поля ввода */}
      <FormControl fullWidth style={formControlStyle}>
        <InputLabel id="employee-name-label">Имя сотрудника</InputLabel>
        <Select labelId="employee-name-label" id="employee-name">
          {/* Здесь должны быть элементы MenuItem */}
        </Select>
      </FormControl>
      <FormControl fullWidth style={formControlStyle}>
        <InputLabel id="job-title-label">Название должности</InputLabel>
        <Select labelId="job-title-label" id="job-title">
          {/* Здесь должны быть элементы MenuItem */}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" style={buttonStyle} fullWidth>
        Создать
      </Button>
      <Button variant="contained" color="default" style={buttonStyle}></Button>
    </Box>
  );
}
