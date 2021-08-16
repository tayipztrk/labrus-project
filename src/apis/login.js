import axios from 'axios';

export default async function getUser() {
    try {
      const response = await axios.get('https://api.ziyuno.com/api/package/packages/en');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    
  }