import Calendar from '../calendar/calendar';

const findRoomCalendar = new Calendar('#findRoomCalendar', {
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#find-room__from').val(formattedDate.split('-')[0]);
    $('#find-room__to').val(formattedDate.split('-')[1]);
  },
});

export default findRoomCalendar;
