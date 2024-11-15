// utils.js

export const getUserCred = () => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    };
    