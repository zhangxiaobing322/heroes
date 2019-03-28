import axios from 'axios';

const api = {
  requestUsers (qq) {
    return new Promise((resolve, reject) => {
      axios.get('/api/users/search?qq='+qq).then(data => {
        resolve(data.data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestLogin (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/users/loginqq',obj).then(data => {
        resolve(data.data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestNewUser (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/users/insertNewUser',obj).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestUpdateGameName (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/users/updateGameName',obj).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestUpdateAdd (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/users/updateAdd',obj).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestUpdateMoney (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/users/updateMoney',obj).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default api