import 'firebase/auth';
import 'firebase/firestore';

export const capitalizeFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

export const storeTokenInLocalStorage = (data, userRole = 'ROLE_ADMIN') => {
  localStorage.setItem('token', data.access_token);
  localStorage.setItem('expires_in', data.expires_in);
  localStorage.setItem('refresh_token', data.refresh_token);
  localStorage.setItem('ur', userRole);
};

export const getDifferenceByDate = (dateOne, dateTwo) => {
  const difference = dateTwo.getTime() - dateOne.getTime(); // This will give difference in milliseconds
  return Math.round(difference / 60000); // Result in minutes
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Format Example: 4 Hrs:10 Mins
export const minutesToHoursAndMinutes = num => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `${hours} h ${minutes}m`;
};

export const redirectToLogin = () => {
  localStorage.clear();
  window.location.href = '/login';
};
