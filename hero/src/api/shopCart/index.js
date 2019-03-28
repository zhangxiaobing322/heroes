import axios from 'axios';
import baseUrl from '@/api';
const api = {
  requestData (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/cart_user/updateCart2',obj)
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
