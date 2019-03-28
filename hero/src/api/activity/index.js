import axios from 'axios';
const api = {
  requestData (pagecode) {
    return new Promise((resolve, reject) => {
      axios.get('/api/huodong?pageCode='+pagecode+'&pageNumber=12')
        .then(data => {
          // console.log(data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
