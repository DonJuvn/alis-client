// import {
//   Button,
//   Box,
//   OutlinedInput,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   IconButton,
// } from '@mui/material';

// import DownloadIcon from '@mui/icons-material/Download';
// export default function OrganizationForm() {
//   const dashedBorderStyle = {
//     border: '2px dashed black',
//     padding: '16px',
//   };

//   const buttonStyle = {
//     margin: '8px',
//   };

//   return (
//     <Box
//       style={{
//         maxWidth: '1460px',
//         minHeight: '661px',
//         backgroundColor: 'white',
//         margin: 'auto',
//         borderRadius: '10px',
//         position: 'relative',
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       <Box
//         style={{
//           ...dashedBorderStyle,
//           width: '30%', // Ширина пустой рамки
//           height: '630px', // Высота пустой рамки
//           borderRadius: '15px', // Закругление углов рамки
//           border: '1px dashed black', // Пунктирная рамка
//           position: 'absolute', // Абсолютное позиционирование относительно родительского Box
//           left: 'calc(30% + 40px)', // Смещение на ширину текущего Box + отступ
//         }}
//       />
//       <Box
//         style={{
//           ...dashedBorderStyle,
//           width: '30%',
//           height: '630px',
//           borderRadius: '15px',
//           paddingRight: '20px',
//           marginRight: '950px',
//           marginTop: '15px',
//           paddingTop: '10px',
//         }}
//       >
//         <Typography
//           variant="subtitle1"
//           gutterBottom
//           style={{ fontWeight: 'bold', marginLeft: '15px' }}
//         >
//           Название организации
//         </Typography>
//         <OutlinedInput
//           placeholder="Введите данные"
//           size="small"
//           style={{ width: '100%', marginBottom: '15px', borderRadius: '10px' }}
//           InputProps={{ className: 'h-28  text-black' }}
//         />
//         <OutlinedInput
//           placeholder="Текстовое поле"
//           size="small"
//           style={{ width: '100%', marginBottom: '15px', borderRadius: '10px' }}
//           InputProps={{ className: 'h-28  text-black' }}
//         />
//         <OutlinedInput
//           placeholder="Организация"
//           size="small"
//           style={{ width: '100%', marginBottom: '15px', borderRadius: '10px' }}
//           inputProps={{
//             className: 'h-28  text-black',
//           }}
//         />
//         <OutlinedInput
//           placeholder="Контрагент"
//           size="small"
//           style={{ width: '100%', marginBottom: '15px', borderRadius: '10px' }}
//           inputProps={{
//             className: 'h-28  text-black',
//           }}
//         />
//         <OutlinedInput
//           placeholder="Документ"
//           size="small"
//           style={{ width: '100%', marginBottom: '15px', borderRadius: '10px' }}
//           inputProps={{
//             className: 'h-28 text-black',
//           }}
//         />
//         <OutlinedInput
//           placeholder="Сотрудник"
//           size="small"
//           style={{ width: '100%', marginBottom: '15px', borderRadius: '10px' }}
//           inputProps={{
//             className: 'h-28  text-black',
//           }}
//         />
//         <Typography
//           variant="subtitle1"
//           gutterBottom
//           style={{ fontWeight: 'bold', marginLeft: '15px' }}
//         >
//           Имя сотрудника
//         </Typography>
//         <FormControl style={{ width: '100%' }}>
//           <InputLabel id="job-title-label">Введите данные</InputLabel>
//           <Select labelId="job-title-label" id="job-title">
//             {/* Здесь должны быть элементы MenuItem */}
//           </Select>
//         </FormControl>
//         <Typography
//           variant="subtitle1"
//           gutterBottom
//           style={{ fontWeight: 'bold', marginLeft: '15px' }}
//         >
//           Название должности
//         </Typography>
//         <FormControl style={{ width: '100%' }}>
//           <InputLabel id="job-title-label">Введите данные</InputLabel>
//           <Select labelId="job-title-label" id="job-title">
//             {/* Здесь должны быть элементы MenuItem */}
//           </Select>
//         </FormControl>
//         <Button
//           variant="contained"
//           color="primary"
//           style={{
//             ...buttonStyle,
//             width: '340px',
//             backgroundColor: '#323DA7',
//             borderRadius: '10px',
//             marginTop: '25px',
//             marginRight: '1px',
//             position: 'relative',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           Создать
//           <Box
//             style={{
//               width: '35px',
//               position: 'absolute',
//               right: '-50px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               height: '35px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               border: '1px solid black',
//               backgroundColor: 'white',
//               borderRadius: '5px',
//             }}
//           >
//             <IconButton style={{ color: '#323DA7' }}>
//               <DownloadIcon />
//             </IconButton>
//           </Box>
//         </Button>
//       </Box>
//     </Box>
//   );
// }

import React from 'react';

const OrganizationForm = () => {
  return <div>OrganizationForm</div>;
};

export default OrganizationForm;
