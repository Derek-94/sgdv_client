import axios from 'axios';
import { getToken } from './token';

const getUserInfo = async () => {
  const token = getToken();
  if (!token) {
    return;
  }
  const res = await axios.get(`/users`, {
    headers: {
      authorization: token,
    },
  });
  console.log(res);
  if (res.status === 200) return true;
  else return false;
};

export default getUserInfo;
