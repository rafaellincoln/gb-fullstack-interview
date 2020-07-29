import axios from 'axios'

export const makeTransfer = async (data) => {
  try {
    await axios.post('http://localhost:3001/dev/transfer', data);
    return true;
  } catch (error) {
    console.error(error)
    return false;
  }
}