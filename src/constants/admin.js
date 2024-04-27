const jsonData = [
  {
    id: 1,
    name: 'Айдын Мейрамханулы',
    email: 'aidyn.meiramkhanuly@gmail.com',
  },
  {
    id: 2,
    name: 'Admin 2',
    email: 'admin2@example.com',
  },
  {
    id: 3,
    name: 'Admin 3',
    email: 'admin3@example.com',
  },
];

export const dataSet = new Set();

jsonData.forEach(item => {
  dataSet.add(item.email, item);
});
