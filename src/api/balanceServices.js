import axios from 'axios';

const getBalance = async () => {
  const { data } = await axios.post('/api/users/balance');

  return data.user.balance;
};

const balanceServices = {
  getBalance
};

export default balanceServices;