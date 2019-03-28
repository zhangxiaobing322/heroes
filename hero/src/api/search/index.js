import axios from 'axios';

const api = {
  requestSearch (goodName) {
    return new Promise((resolve, reject) => {
      axios.get('/api/lolshop/search?goodName='+goodName).then(data => {
        resolve(data.data.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default api