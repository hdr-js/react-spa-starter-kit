import moment from 'moment';

export const getTimeStamp = (milliseconds, variant = 'date-time') => {
  const date = `${moment(milliseconds).format('YYYY-MM-DD')}`;
  const time = `${moment(milliseconds).format('HH:mm:ss')}`;
  if (variant === 'date') return date;
  if (variant === 'time') return time;
  if (variant === 'date-time') return `${date} ${time}`;
  return `${date} ${time}`;
};

export const minsToMinSec = mins => {
  const min = Math.floor(mins);
  const sec = Number((mins - Math.floor(mins)) * 60).toFixed(0);
  if (mins) {
    if (sec === '0') {
      return min ? `${min}m` : '';
    }
    return `${min ? `${min}m` : ''} ${sec}s`;
  }
  if (mins < 1) {
    return `${sec}s`;
  }
  return mins;
};

export const millisecondsToMinSec = milliseconds => {
  const min = Math.floor(milliseconds / 60000);
  const sec = Math.floor((milliseconds / 1000) % 60);
  if (milliseconds) {
    if (sec === 0) {
      return `${min}m`;
    }
    return `${min ? `${min}m` : ''} ${sec}s`;
  }
  if (min < 1) {
    return `${sec}s`;
  }
  return min;
};

export const millisecondsToHrsMinSec = milliseconds => {
  const mins = Math.floor(milliseconds / 60000);
  const sec = (milliseconds / 1000) % 60;
  return `${mins}:${sec}`;
};

export default getTimeStamp;
