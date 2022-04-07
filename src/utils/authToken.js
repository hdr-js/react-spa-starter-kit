export default {
  check: () => {
    return !!localStorage.getItem('token');
  },
};
