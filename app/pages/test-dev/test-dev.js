import DropDown from '../../components/dropdown/dropdown';

// const guests = document.getElementById('guests');
// const dropdown = new DropDown({
//   anchor: guests,
//   fallbackTitle: 'Сколько гостей',
//   showFullAmount: true,
//   anchorDeclensions: ['гость', 'гостя', 'гостей'],
//   items: [
//     {
//       title: 'Младенцы',
//       show: true,
//       declensions: ['младенец', 'младенца', 'младенцев'],
//     },
//     {
//       title: 'Дети',
//     },
//     {
//       title: 'Взрослые',
//     },
//   ],
//   helpButtons: true,
// });
const dropdown = new DropDown({
  anchor: guests,
  fallbackTitle: 'Выберите удобства',
  showFullAmount: false,
  anchorDeclensions: ['гость', 'гостя', 'гостей'],
  items: [
    {
      title: 'CПАЛЬНИ',
      show: true,
      declensions: ['спальня', 'спальни', 'спален'],
    },
    {
      title: 'КРОВАТИ',
      show: true,
      declensions: ['кровать', 'кровати', 'кроватей'],
    },
    {
      title: 'ВАННЫЕ КОМНАТЫ',
      show: true,
      declensions: ['ванная комната', 'ванных комнаты', 'ванных комнат'],
    },
  ],
  helpButtons: false,
});
