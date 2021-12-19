export const saveToken = (token: string) => {
  localStorage.setItem('sgdc', token);
};

export const getToken = () => {
  const token = localStorage.getItem('sgdc');
  if (!token) {
    return false;
  } else {
    return token;
  }
};
