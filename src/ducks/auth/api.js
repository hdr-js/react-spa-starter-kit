export default {
  login: async ({ email, password }) => {
    const response = setTimeout(() => {
      if (password === '123') {
        if (email.includes('manager')) {
          const user = {
            id: 'm-1',
            name: 'Manager',
            role: 'MANAGER',
            token: '69i57j0i512j0i10j0i512j0i10j0i30j0i10i30l',
          };

          localStorage.setItem('token', user.token);
          localStorage.setItem('name', user.name);
          localStorage.setItem('role', user.role);

          return user;
        }
        if (email.includes('admin')) {
          const user = {
            id: 'a-1',
            name: 'Admin',
            role: 'ADMIN',
            token: '69i57j0i512j0i10j0i512j0i10j0i30j0i10i30l',
          };
          localStorage.setItem('token', user.token);
          localStorage.setItem('name', user.name);
          localStorage.setItem('role', user.role);

          return user;
        }
      }
      return {
        error: '401',
        message: 'Invalid Credentials',
      };
    }, 2000);

    return response;
  },
};
